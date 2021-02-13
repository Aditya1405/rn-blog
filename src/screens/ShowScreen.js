/**
 * page desc
 * ----------------------
 * it's just a boiler plate
 * -----------------------
 * task 1 
 * import libraries
 */
import React,{useContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Context as BlogContext, Context} from '../context/BlogContext' 
import { FontAwesome } from '@expo/vector-icons';
 /**
 * task 2 
 * create a fnction that returns jsx
 */
const ShowScreen = function({navigation}){
    //id is not directly received as prop
    // we need to call the fxn below to get id
    const id=navigation.getParam('id')

    const {state} =useContext(Context)

    const blogpost = state.find((blogpost)=>blogpost.id===id)
 
    return(
        <View>
            <Text>{blogpost.title}</Text>
            <Text>{blogpost.content}</Text>
        </View>
    )
}

//navigation option
ShowScreen.navigationOptions = function({navigation}){
    const id=navigation.getParam('id')
    return {
        headerRight:<TouchableOpacity onPress={()=>{
            navigation.navigate('Edit',{id:id})}}>
                        <FontAwesome name='pencil' size={30} style={style.pencil}/>
                    </TouchableOpacity>
    }
}
 /**
 * task 3
 * create a stylesheet
 */
const style = StyleSheet.create({
    pencil:{
        marginRight:20
    }
})
 /**
 * task 4 
 * export
 */
export default ShowScreen