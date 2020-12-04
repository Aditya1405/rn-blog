import React from 'react'
/**
 * think of this object as pipe of sort
 * this object is responsible for directly transmiting data from parent to child
 */
 const BlogContext = React.createContext()
//receive a prop from a prop object right here called children ~ props.children
export const BlogProvider = function({children}){
     /**
      * what is children ?
      * -----
      * not related to context ; a different feature in react
      * see one note - wrapping the nav using provider
      * ----
      * what is BlogContext.Provider ?
      * 
      * since we have exported 'app' from app.js from inside the fxn
      * so blogprovider is wrapping or showing the react stack navigator inside of 
      * it which therefore includes all the other screens and components that we're
      * displaying inside of our application 
      */
     return(
         <BlogContext.Provider>
             {children}
         </BlogContext.Provider>
     )
 }
 /**
  * why not export default ?
  * becaue we have to export blogcontext as a default 
  */