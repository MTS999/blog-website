import { Route,Routes, useRoutes } from "react-router-dom"
import PostDetail from "./components/PostDetail"
import Layout from "./Layout/Layout"
import PostList from "./components/PostList"
export default function Routess(){
    // return(
    //  <Routes>


    //    <Route  path="/"  element={<Layout/>}  />
    //    <Route path="/postDetail/:id" element={<PostDetail/>}  />


    //  </Routes>
    // )
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