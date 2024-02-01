import Modal from "react-modal"
import axios from "axios";
import React, { useEffect } from "react";
import Main from "./Main"
import { Link ,useNavigate} from "react-router-dom"



export default function PostList() {
    const [seen, setSeen] = React.useState([])
    const [posts, setPosts] = React.useState(null)
    const [showModel, setShowModel] = React.useState(false)
    const [deleteID, setDeleteID] = React.useState(null)
    const [newPost, setNewPostset] = React.useState({ title: "", body: "" })
   const navigate=useNavigate()

    function handleSeen(id) {
        const data = id
        setSeen([...seen, data]);
    }




    function permanentDelete() {

        // console.log("mts")
        const update = posts.filter(post => post.id !== deleteID)
        setPosts(update)

    }

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

    const fetchData = async () => {
        const requestobj = {
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        }

        const result=await axios(requestobj)

        if(result.status===200){

        setPosts(result.data)
        }
    }

    useEffect(() => {


        fetchData()
    },

        [])


    if (posts === null) {
        return <div className="loader"></div>
    }


    const postList = posts.map((post) => (
        <div className="contant" key={post.id} onClick={() => handleSeen(post.id)}>

            <Link className="title-link" to={`/postDetail/${post.id}`} >

                <h1 className="post-title" >{post.title}</h1>
                <p className="">{post.body}</p>
            </Link>

            {deleteID !== post.id &&


                <button className="delete-btn" onClick={() => setDeleteID(post.id)}>delete</button>
            }
            {deleteID === post.id &&

                <div>
                    <p className="confirmation">Do you wanna delete</p>
                    <button className="delete-btn" onClick={permanentDelete} >yes</button>
                    <button className="delete-btn" onClick={() => setDeleteID(null)} >no</button>

                </div>
            }






        </div>





    ))

    return (
        <>

            <Main />

            <div className="post-list">
                {/* <button className="add-btn" onClick={() => setShowModel(true)}>ADD</button> */}
                <button className="add-btn" onClick={() => navigate("/addPost")}>ADD</button>
                
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


