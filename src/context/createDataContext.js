import React, { useReducer } from 'react'
/**
 * first import react and usereducer
 * then export default a fxn
 * this fxn has 3 params:
 * @param {*} reducer 
 * @param {*} actions --- this is going to  be an object that has all these call back
 * functions that we want ot make available to a child component so that they can somehow 
 * dispatch an action and change our state
 * @param {*} initialState --- of usereducer
 *  3 things will change -- reducer , helper(dispatch) , init
 * we create 2 things inside this fxn and then return them
 * 1- context object ---  this will remail same for all(addpost, comment, images etc) 
 * 2- provider function ---  (same as blogcontext --> blogprovider)  
 * then return context and provider as well
 */
export default function(reducer, actions, initialState) {

    const Context = React.createContext();

    const Provider = function({ children }){
      const [state, dispatch] = useReducer(reducer, initialState);

      // actions === { addBlogPost: (dispatch) => { return () => {} } }
      // we have declared an object bound actions
      const boundActions = {};
      for (let key in actions) {
          //boundActions[key] similar to boundActions.addblogpost 
          //actions is from params -- look up 
        boundActions[key] = actions[key](dispatch);
    }
    //return jsx
    return (
      <Context.Provider value={{ state:state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

