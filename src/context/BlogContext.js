import React, { useReducer } from 'react';
/**
 * think of this object as pipe of sort
 * this object is responsible for directly transmiting data from parent to child
 */
const BlogContext = React.createContext();
//state = blogpost
const blogReducer = (state, action) => {
    switch (action.type) {
      case 'add_blogpost':
        return [...state, { title: `Blog Post #${state.length + 1}` }];
      default:
        return state;
    }
  };
//receive a prop from a prop object right here called children ~ props.children
export const BlogProvider = function({children}){
    console.log("******************************blogcontext********************************************")
    // create a data set blogpost as an array of objects
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    //creating a helper function to set blog post
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
      };
     /**
      * what is children ?
      * -----
      * not related to context ; a different feature in react
      * see one note - wrapping the nav using provider
      * ----
      * what is BlogContext.Provider ?
      * ----
      * 
      * ----  
      * since we have exported 'app' from app.js from inside the fxn
      * so blogprovider is wrapping or showing the react stack navigator inside of 
      * it which therefore includes all the other screens and components that we're
      * displaying inside of our application 
      */
     return(
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
      </BlogContext.Provider>
    );
 }
 /**
  * why not export default ?
  * becaue we have to export blogcontext as a default 
  */
 export default BlogContext;