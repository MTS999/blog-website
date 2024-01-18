import { Link,Route,Routes } from "react-router-dom"
import PostList from "./components/PostList"
import PostDetail from "./components/PostDetail"
import Layout from "./components/Layout"
export default function Routess(){
    return(
     <Routes>
       <Route  path="/"  element={<Layout/>}  />
       {/* <Route path="/postDetail/:id" element={<PostDetail/>}  /> */}
       <Route path="/postDetail" element={<PostDetail/>}  />


     </Routes>
    )
}