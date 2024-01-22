import { Route,Routes } from "react-router-dom"
import PostDetail from "./components/PostDetail"
import Layout from "./components/Layout/Layout"
export default function Routess(){
    return(
     <Routes>
       <Route  path="/"  element={<Layout/>}  />
       {/* <Route path="/postDetail/:id" element={<PostDetail/>}  /> */}
       <Route path="/postDetail/:id" element={<PostDetail/>}  />


     </Routes>
    )
}