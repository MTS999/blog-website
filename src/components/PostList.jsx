import axios from "axios";
import React, { useEffect } from "react";
import Main from "./Main"
import { Link } from "react-router-dom"

import { Button } from "@mui/material";



export default function PostList() {
    const [seen, setSeen] = React.useState([])
    const [posts, setPosts] = React.useState([])
    const [deleteID, setDeleteID] = React.useState(null)
    const [start, setStart] = React.useState(0)
    const [totalpost, setTotalPost] = React.useState(0)
    const [loader, setLoder] = React.useState(false)
    const limit = 10;

    // seen function
    function handleSeen(id) {
        const data = id
        setSeen([...seen, data]);
    }

    // delete  Post functions
    async function permanentDelete() {
        setLoder(true)

        const deleteObject = {
            url: `https://jsonplaceholder.typicode.com/posts/${deleteID}`,
            method: "DELETE"
        }

        const result = await axios(deleteObject)

        if (result.status === 200) {
            deletePost()
            console.log("mts")
            setLoder(false)
        }
    }
    function deletePost() {

        const update = posts.filter(post => post.id !== deleteID)
        setPosts(update)

    }
        
//    fetchData from api

    const fetchData = async () => {
        setLoder(true)
        const requestobj = {
            // url: "https://jsonplaceholder.typicode.com/posts",
            // url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
            url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
            method: "GET"
        }

        const result = await axios(requestobj)

        if (result.status === 200) {
            setPosts(result.data);
            setLoder(false)
        }
    }

    const countLength = async () => {
        setLoder(true)
        const requestobj = {
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        }

        const result = await axios(requestobj)

        if (result.status === 200) {
            setTotalPost(result.data.length)


        }
    }

    useEffect(() => {
        fetchData();
    }, [start]);


    useEffect(() => {
        countLength()
    }, [])



    const postList = posts.map((post) => (
        <div className="contant" key={post.id} onClick={() => handleSeen(post.id)}>

            <Link className="title-link" to={`/postDetail/${post.id}`} >

                <h1 className="post-title" >{post.title}</h1>
                <p className="">{post.body}</p>
            </Link>

            {/* delete button */}

            {deleteID !== post.id &&
                <button className="delete-btn" onClick={() => setDeleteID(post.id)}>delete</button>
            }
{/* delete confermation */}

            {deleteID === post.id &&

                <div>
                    <p className="confirmation">Do you wanna delete</p>
                    <button className="delete-btn" onClick={permanentDelete} >yes</button>
                    <button className="delete-btn" onClick={() => setDeleteID(null)} >no</button>

                </div>
            }
            {
                loader && (
                    <div className="loader"></div>
                )
            }
        </div>

    ))


    return (
        <>
            <Main />
            <div className="post-list">
                {postList}
  
                {/* previous and  next buttons */}

                <div className="nextpre">

                    <button
                        className="next"
                        onClick={() => setStart(pre => pre - 5)}
                        disabled={start === 0 ? true : false}
                    >Previous</button>


                    <p className="inline"> {start} to {start + limit}</p>

                    {posts.length > 0 &&

                        <button
                            className="next"
                            onClick={() =>  setStart(pre => pre + 10)}
                            disabled={start + limit >= totalpost ? true : false}
                        >Next </button>
                    }
                </div>
            </div>
        </>
    )
}


