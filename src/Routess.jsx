import {  useRoutes } from "react-router-dom"
import PostDetail from "./components/PostDetail"
import Layout from "./Layout/Layout"
import PostList from "./components/PostList"
export default function Routess(){
   
    return useRoutes([
      {
        path:'/',
        element:<Layout/>,
        children:
          [

            {path:'/', element:<PostList/>},
            {path:"postDetail/:id", element:<PostDetail/>}
          ]
        
      }
    ])
}