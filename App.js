/**
 * page desc
 * ----------------------
 * its a navigation map file
 * whatever new pages that need to be displayed on screen must be 
 * first declared here
 * 
 * -----------------------
 * task 1 
 * import libraries
 */
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'
/**
 * why curly braces ?
 * because we exported blog provider as something called a named export.
 * So in other words we did not use the export default syntax.
 * So in order to import it we have to use those curly braces.
 */
import {Provider} from './src/context/BlogContext'
import CreateScreen from './src/screens/CreateScreen';
 /**
 * task 2 
 * create a nav function
 * this takes in 2 arguments
 */
const navigator = createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen
},{
  InitialRouteName:'Index',
  defaultNavigationOptions:{
    //sets title inside every page 
    //later we will customize it base on screen
    title:'Blogs'
  }
})

 /**
 * task 4
 * export
 * must always export react copmponent
 * instead of directly exporting createappcontainer we simply wrapped it inside our personal component 
 */
const App = createAppContainer(navigator)

export default function(){
  // this returns jsx component so make sure to import react on top from react
  return(
    <Provider>
      <App/>
    </Provider>
  )
  /**
   * we are passing app in as the child to blog provider
   * we can say that that the 'children' used in blogprovider in the context folder is app
   */

}