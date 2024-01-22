import React from "react";
import postData from "../data"
import { Link } from "react-router-dom"
export default function PostList() {
    const [seen,setSeen]=React.useState([])

    function handleSeen(id){
        console.log(id)
   const data=id
        setSeen([...seen, data]);

        console.log(seen)

    }
    const postList = postData.map((post) => (
        <div className="contant" key={post.id} onClick={()=>handleSeen(post.id)}>

            <p>{seen.includes(post.id)?"seen": "unseen"}</p>
            {/* <Link className="title-link" to={`/postDetail/${post.id}`} */}
            
            {/* >    */}

            <h1 className="post-title" >{post.title}</h1>
            <p className="">{post.body}</p>
            {/* </Link> */}
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