/**
 * page desc
 * ----------------------
 * this is the first page of this app
 * 
 * -----------------------
 * task 1 
 * import libraries
 */
import React,{useContext} from 'react'
import {Text, View, StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'

 /**
 * task 2 
 * create a fnction that returns jsx
 */
const IndexScreen = function(){
    console.log("help")
    //using hook - useContext
    //this value is equal to the value provided in the blogcontext-blogprovider
    //now we are receiving a an array of objects and for that we need to destructuring
    const {data,addblogpost} = useContext(BlogContext)
    return(
        <View>
            <Text>IndexScreen</Text>
            <Button 
                title="add post"
                onPress={function(){console.log("************index***********")}}
            />
            <FlatList
                data={data}
                keyExtractor={(k)=>k.title}
                renderItem={function({item}){
                    return(
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}
 /**
 * task 3
 * create a stylesheet
 */
const style = StyleSheet.create({

})
 /**
 * task 1 
 * export
 */
export default IndexScreen