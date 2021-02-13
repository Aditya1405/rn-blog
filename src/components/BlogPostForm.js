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

 /**
 * task 2 
 * create a fnction that returns jsx
 */
const BLogPostForm = function({onsubmit,initialValues}){
    const[Title,setTitle] = useState(initialValues.title)
    const[Content,setContent] = useState(initialValues.content)
  
    return(
        <View>
            <Text style={style.label}>Enter Title:</Text>
            <TextInput 
                style={style.input}
                value={Title}
                onChangeText={function(newval){
                    setTitle(newval)
                }}
            />
            <Text style={style.label}>Enter Content:</Text>
            <TextInput
                style={style.input}
                value={Content}
                onChangeText={function(newval){
                    setContent(newval)
                }}
            />
            <Button
                title="Save blog post"
                onPress={function(){
                   onsubmit(Title,Content)
                }}
            />
        </View>
    )
}
//this is an object -- will be used to fill in some default values
//totally automatic 
//works only when initialvalues is empty. like default value
BLogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
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
export default BLogPostForm