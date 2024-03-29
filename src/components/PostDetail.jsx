
import { useParams, useNavigate, Link } from "react-router-dom"
import React, { useEffect } from "react"
// import { post1 } from "../data"
import axios from "axios"
export default function PostDetail() {
    const [detail, setDetail] = React.useState(null)
    const params = useParams()
    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }


    const fetchDetail = async () => {
        const requestobj = {
            url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
            method: "GET"

        }
        const result = await axios(requestobj)
        if (result.status === 200) {

            setDetail(result.data)
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [])

    if (detail === null) {
        return <div className="loader"></div>
    }
    return (
        <>
            <div className="detail-section">

                <h1 className="head">PostDetail</h1>

                <h2 className="title">{detail.title}</h2>
                <p className="detail">{detail.body}</p>

                {/* <Link to={`/postDetail/${detail.id}/edit`}>Edit</Link> */}

                <button className=" edit" onClick={() =>
                    navigate(`/postDetail/${detail.id}/edit`, { state: detail })} > Edit 
                    <i className="nf nf-md-application_edit"></i> </button>
                    <div>

                <button className="edit" onClick={back}>back to all posts<i className="nf nf-fa-backward"></i>
                
                </button>
                    </div>

            </div>
        </>



    )
}