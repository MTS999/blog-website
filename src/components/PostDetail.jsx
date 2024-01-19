
import { useParams, useNavigate } from "react-router-dom"
import { post1 } from "../data"
export default function PostDetail() {

    const params = useParams()
    const navigate = useNavigate()
    const post = post1(params.id)
    function back() {
        navigate(-1)
    }
    return (
        <>
            <div className="detail-section">

                <h1 className="head">PostDetail</h1>

                <button className="btn" onClick={back}>back to all posts</button>
                <h2 className="title">{post.title}</h2>
                <p className="detail">{post.body}</p>
            </div>
        </>



    )
}