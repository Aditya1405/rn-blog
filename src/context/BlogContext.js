import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'
//state = blogpost
const blogReducer = (state, action) => {
    switch (action.type) {
      case 'get_blogposts':
        return action.payload;
        /**
         * notice we did not put return [...state,action.paylaod]
         * reason - api is total source of truth ; we do not want to update any data
         * so simply relace the data with our new oe
         */ 
      /**
       * ========deleted==========
       * case 'add_blogpost':
        return [...state, { 
          id: Math.floor(Math.random()*99999) ,
          title: action.payload.title,
          content: action.payload.content
        }];
        ========deleted==========
       */
      case 'edit_blogpost':
        return state.map(blogpost=>{
          return(blogpost.id === action.payload.id?action.payload:blogpost)
        })
      case 'delete_blogpost':
        return state.filter(blogpost=>blogpost.id!=action.payload)
      default:
        return state;
    }
  };
  //creating a helper function to get blog post from server
  const getBlogPosts = dispatch => {
    return async () => {
      const response = await jsonServer.get('/blogposts');
      // response.data property is where our list of blogpost is going to be
      dispatch({ type: 'get_blogposts', payload: response.data });
    };
  };

  //creating a helper function to set blog post
  const addBlogPost = (dispatch) => {
    return(async function(title,content,callback){
      await jsonServer.post('/blogposts',{title:title,content:content})
      //dispatch({ type: 'add_blogpost', payload:{title:title,content:content} });
      if(callback){
        callback()
      }
    })
  };
   //creating a helper function to delete blog post
   const deleteBlogPost = (dispatch) => {
    return(async function(id){
      //this deletes from server
      await jsonServer.delete(`/blogposts/${id}`)
      // this deletes from state
      dispatch({ type: 'delete_blogpost',payload:id });
    })
  };
   //creating a helper function to edit blog post
   const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
      await jsonServer.put(`/blogposts/${id}`,{title:title,content:content})
      dispatch({
        type: 'edit_blogpost',
        payload: { id, title, content }
      });
      if (callback) {
        callback();
      }
    };
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                     //deleted portion
  // deleting blog provider to use createdatacontext(autmatic provider)
  
/**
 * //receive a prop from a prop object right here called children ~ props.children
export const BlogProvider = function({children}){
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
   //return(
    //<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      //{children}
    //</BlogContext.Provider>
  //);
//}
// * 
 //*/
 
 /**
  * why not export default ?
  * becaue we have to export blogcontext as a default 
  * this was deleted because we already exported from automatic producer (create data contex)
  */
 //export default BlogContext;

                              //deleted portion
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// in order to export something from this page we will deconstruct the createdatacontext() --> this is a function
 export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts},[])

 /** 
 * what we have inside this file is quite compact compared to earlier version
 * that we deleted -- commented out
 * anytime we want to add some new type of resource inside our app
 * all we need to do is
 * 1-- create a new context file (like this one - blog context)
 * 2-- create a reducer
 * 3-- create differen function that will dispatch an action that will modifiy our reducer
 * 4-- finally, call create data context ---
 * a----pass reducer,
 * b----pass object will all different action
 * c----pass in default state
 * you will need a deconstructor to store context and provider returned by step 4
 */