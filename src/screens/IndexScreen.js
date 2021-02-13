/**
 * page desc
 * ----------------------
 * this is the first page of this app
 * 
 * -----------------------
 * task 1 
 * import libraries
 */
//use effect is only used to run some bit of code one time when the component is first renedered
import React,{useContext,useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
//for delete icon
import { Feather } from '@expo/vector-icons';

/**
 * incase you endip having mutiple context 
 * to avoid confusion we can rename the context variable
 * replace -- import {Context} to 
 * import {Context as Blogcontext}
 */
import {Context} from '../context/BlogContext'

 /**
 * task 2 
 * create a fnction that returns jsx
 */
const IndexScreen = function({navigation}){
    console.log("index")
    //using hook - useContext
    //this value is equal to the value provided in the blogcontext-blogprovider
    //now we are receiving a an array of objects and for that we need to destructuring
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
    //any function that modifies our state never call it from directly inside our body
    // as it will lead to an infinite loop
    // that empty bracket [] tells that it should be called only one time 
    useEffect(function() {
        getBlogPosts();
        // Without this it will only fetch once at start
        //with this whenevr there is a change in the list
        const listener = navigation.addListener('didFocus',function () {
            getBlogPosts();
        })
        //to avoid memory leak 
        // when idexscreen life has ended
        return(function () {
            listener.remove();
        })
    },[])

    return(
        <View>
            <Text>IndexScreen</Text>
            
            <FlatList
                data={state}
                keyExtractor={k=>k.title}
                renderItem={function({item}){
                    return(
                        <TouchableOpacity onPress={function(){
                            //pass the id as an optional argument inside navigate
                            console.log(item.id) 
                            //id is object : contains item.id
                            navigation.navigate('Show',{id:item.id})}}>
                            <View style={style.row}>
                            <Text style={style.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={function(){
                                deleteBlogPost(item.id)
                            }}>
                                <Feather style={style.icon}name="trash"/>   
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

//navigation option
IndexScreen.navigationOptions = function({navigation}){
    return {
        headerRight:<TouchableOpacity onPress={()=>{
            navigation.navigate('Create')}}>
                        <Feather name='plus' size={30} style={style.plus}/>
                    </TouchableOpacity>
    }
}
 /**  
 * task 3
 * create a stylesheet
 */
const style = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        borderWidth:2,
        borderColor:'grey'
    },
    title:{
        fontSize:18
    },
    icon:{fontSize:24},
    plus:{
        marginRight:20
    }
})
 /**
 * task 1 
 * export
 */
export default IndexScreen