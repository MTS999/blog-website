
import postData from "../data"
import { Link } from "react-router-dom"
export default function PostList() {
    console.log(postData)
    const postList = postData.map((post) => (
        <div className="contant" key={post.id}>
            <Link className="title-link" to={`/postDetail/${post.id}`}
            
            >   
            {/* <Link className="title-link" to={`/postDetail/${post.id}`}> */}

            <h1 className="post-title" >{post.title}</h1>
            <p className="">{post.body}</p>
            </Link>
        </div>
    ))
    return (
        <>
        <div className="post-list">

            {postList}
        </div>
        </>


    )
}