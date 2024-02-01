import { Route, Routes } from "react-router-dom"
import PostDetail from "./components/PostDetail"
import Layout from "./Layout/Layout"
import PostList from "./components/PostList"
import PostEdit from "./components/PostEdit"
export default function Routess() {


  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="postDetail/:id" element={<PostDetail />} />
        <Route path="postDetail/:id/edit" element={<PostEdit />} />

        <Route path="postDetail/:id/edit/postedit" element={<PostEdit />} />
        <Route path="addPost" element={<PostEdit />} />


      </Route>


    </Routes>



  )

}





{/* // return useRoutes([
    //   {
    //     path:'/',
    //     element:<Layout/>,
    //     children:
    //       [

    //         {path:'/', element:<PostList/>},
    //         {path:"postDetail/:id", element:<PostDetail/>}
    //       ]
        
    //   }
    // ]) */}