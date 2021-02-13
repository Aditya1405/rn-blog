/**
 * page desc
 * ----------------------
 * it's just a boiler plate
 * -----------------------
 * task 1 
 * import libraries
 */
import React,{useContext,useState} from 'react'
import {Text, View, StyleSheet, TextInput,Button} from 'react-native'
import {Context as BlogContext, Context} from '../context/BlogContext' 
import BlogPostForm from '../components/BlogPostForm'
import BLogPostForm from '../components/BlogPostForm'
 /**
 * task 2 
 * create a fnction that returns jsx
 */
const EditScreen = function({navigation}){
    const id=navigation.getParam('id')
    const {state,editBlogPost}=useContext(Context)
    const blogpost = state.find(blogpost=>blogpost.id===id)
  
    return(
        <BLogPostForm
            initialValues={{title:blogpost.title,content:blogpost.content}}
            onsubmit={function (title,content){
                editBlogPost(id,title,content, () => navigation.pop())
        }}
        />
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
export default EditScreen