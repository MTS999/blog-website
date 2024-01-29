
import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
// import { post1 } from "../data"
import axios from "axios"
export default function PostDetail() {
    const [detail, setDetail] = React.useState(null)
    const params = useParams()
    const navigate = useNavigate()
    // const post = post1(params.id)
    function back() {
        navigate(-1)
    }


    const fetchDetail = async () => {
        const requestobj = {
            url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
            method: "GET"

        }
        const result = await axios(requestobj)
        if(result.status===200){

            setDetail(result.data)
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [])

    if(detail===null){
        return <h1>Loading</h1>
    }
    return (
        <>
            <div className="detail-section">

                <h1 className="head">PostDetail</h1>

                <button className="btn" onClick={back}>back to all posts</button>
                <h2 className="title">{detail.title}</h2>
                <p className="detail">{detail.body}</p>
            </div>
        </>



    )
}