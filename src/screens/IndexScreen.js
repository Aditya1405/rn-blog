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
import {Text, View, StyleSheet} from 'react-native'
import BlogContext from '../context/BlogContext'

 /**
 * task 2 
 * create a fnction that returns jsx
 */
const IndexScreen = function(){
    //using hook - useContext
    //this value is equal to the value provided in the blogcontext-blogprovider
    const value = useContext(BlogContext)
    return(
        <View>
            <Text>IndexScreen</Text>
            <Text>{value}</Text>
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