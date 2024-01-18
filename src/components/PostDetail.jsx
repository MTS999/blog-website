
import { useParams,useNavigate } from "react-router-dom"
import { post1 } from "../data"
export default function PostDetail() {

    const params = useParams()
    const navigate=useNavigate()
    const post = post1(params.id)
   function back(){
    navigate(-1)
   }
    return (
        <>
        <h1>PostDetail</h1>

        <button onClick={back}>back to all posts</button>
       <h2>{post.title}</h2>
       <p>{post.body}</p>
        </>
        


    )
}