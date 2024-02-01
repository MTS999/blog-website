import axios from "axios";
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"


export default function PostEdit() {

    const [addPost, setAddPost] = React.useState(false)

    const [detail, setDetail] = React.useState(null)


    const [formData, setFormData] = React.useState({
        title: detail ? detail.title : "",
        body: detail ? detail.body : "",
        userId: detail ? detail.userId : ""
    })
    console.log("i am here")

    // console.log(formData)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const params = useParams();

    async function fetchData() {
        const requestObj = {
            url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
            method: "GET"
        }

        const result = await axios(requestObj)
        setDetail(result.data)
        // console.log(result.data)
    }

    useEffect(() => {
        if (params.id) {

            fetchData()
        }
        else {
            setAddPost(true)
        }
    }, [])

    const requestobj = addPost ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts/${params.id}`


    const methods = addPost ? "POST" : "PUT"
    function handleSubmit(e) {
        e.preventDefault()

        fetch(requestobj, {
            method: methods,
            body: JSON.stringify({
                id: params.id,
                title: formData.title,
                body: formData.body,
                userId: formData.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }
    if (  addPost===null && detail === null) {
        return <h1>Loading</h1>
    }
    return (
        <>
            <div className="main-form">


                <form className="form" onSubmit={handleSubmit}>

                    <div>

                        <label htmlFor="title">
                            Title:
                        </label>
                    </div>

                    <div>

                        <input
                            className="title1"
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div>

                        <label htmlFor="body">
                            body:
                        </label>
                    </div>

                    <div>

                        <input
                            className="body1"
                            type="text"
                            name="body"
                            id="body"
                            value={formData.body}
                            onChange={handleChange}

                        />
                    </div>
                    <div>

                        <label htmlFor="body">
                            userId
                        </label>
                    </div>

                    <div>

                        <input
                            className="userId1"
                            type="number"
                            name="userId"
                            id="userId"
                            value={formData.userId}
                            onChange={handleChange}

                        />
                    </div>
                    <div>

                        <button type="submit"> {addPost ? "add" : "update"}</button>
                    </div>


                </form>
            </div>
        </>
    )
}