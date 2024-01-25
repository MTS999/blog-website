import Modal from "react-modal"
import React from "react";
import Main from "./Main"
import postData from "../data"
import { Link } from "react-router-dom"



export default function PostList() {
    const [seen, setSeen] = React.useState([])
    const [posts, setPosts] = React.useState(postData)
    const [showModel, setShowModel] = React.useState(false)


    const [deleteID, setDeleteID] = React.useState(null)


    console.log(deleteID)
    const [newPost, setNewPostset] = React.useState({ title: "", body: "" })



    function handleSeen(id) {
        const data = id
        setSeen([...seen, data]);
    }




    function permanentDelete(){

        console.log("mts")
         const update = posts.filter(post => post.id !== deleteID)
        setPosts(update)

    }


    const postList = posts.map((post) => (
        <div className="contant" key={post.id} onClick={() => handleSeen(post.id)}>

            {/* <p>{seen.includes(post.id) ? "seen" : "unseen"}</p> */}
            <Link className="title-link" to={`/postDetail/${post.id}`} >

                <h1 className="post-title" >{post.title}</h1>
                <p className="">{post.body}</p>
            </Link>

            {deleteID !== post.id &&


                <button className="delete-btn" onClick={() => setDeleteID(post.id)}>delete</button>
            }
            {deleteID === post.id &&

                <div>
                    <p className="confirmatoin">Do you wanna delete</p>
                      <button className="delete-btn" onClick={permanentDelete} >yes</button>
                    <button className="delete-btn" onClick={()=>setDeleteID(null)} >no</button>

                </div>
            }

            

            


        </div>





    ))
    function handleAdd() {
        const newpost = {
            id: posts.length + 1,
            title: newPost.title,
            body: newPost.body
        }

        setPosts([...posts, newpost])
        setShowModel(false)
        setNewPostset({ title: "", body: "" })
    }
    return (
        <>

        <Main/>
            <div className="post-list">
                <button className="add-btn" onClick={() => setShowModel(true)}>ADD</button>
                {postList}
            </div>


            {
                <Modal
                    isOpen={showModel}
                    onRequestClose={() => setShowModel(false)}
                    contentLabel="Add New Post Modal"
                    ariaHideApp={false}
                    className="model-contant"
                >
                    <div className="modal">

                        <h2 className="add-head">Add new posts</h2>
                        <label>
                            Title :
                        </label>
                        <input
                            className="add-title"
                            type="text"
                            name="title"
                            id="title"
                            value={newPost.title}
                            onChange={(e) => setNewPostset({ ...newPost, title: e.target.value })}
                        />
                        <label>
                            Body :
                        </label>
                        <input
                            className="add-body"
                            type="text"
                            name="body"
                            id="body"
                            value={newPost.body}
                            onChange={(e) => setNewPostset({ ...newPost, body: e.target.value })}

                        />
                        <div className="buutons">

                            <button className="save" onClick={() => setShowModel(false)}>close</button>
                            <button className="delete" onClick={handleAdd}>add</button>
                        </div>

                    </div>
                </Modal>


            }
        </>



    )
}


