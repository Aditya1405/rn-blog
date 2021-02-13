/**
 * page desc
 * ----------------------
 * it's just a boiler plate
 * -----------------------
 * task 1 
 * import libraries
 */
import React,{useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Context as BlogContext, Context} from '../context/BlogContext' 
import BLogPostForm from '../components/BlogPostForm'
 /**
 * task 2 
 * create a fnction that returns jsx
 */
const CreateScreen = function({navigation}){
    const {addBlogPost}=useContext(Context)
    return(
        <BLogPostForm 
            onsubmit={function (title,content){
                addBlogPost(title,content,()=>navigation.navigate('Index'))
            }} />
    )
   
}
 /**
 * task 3
 * create a stylesheet
 */
const style = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:5,
        borderColor:'black',
        padding:10
    },
    label:{
        fontSize:20,
        margin: 10
    }
})
 /**
 * task 4 
 * export
 */
export default CreateScreen