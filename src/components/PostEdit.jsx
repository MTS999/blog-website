import axios from "axios";
import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"


export default function PostEdit() {

    const [addPost, setAddPost] = React.useState(false)


    const [error, setError] = React.useState({})

    const location = useLocation()

    const [formData, setFormData] = React.useState({
        title: "",
        body: "",
        userId: ""
    })

    console.log(error)
    // console.log(location.state)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const params = useParams();



    useEffect(() => {
        if (location.state) {
            setFormData({
                title: location.state?.title || "",
                body: location.state?.body || "",
                userId: location.state?.userId || "",
            })
        }
        else {
            setAddPost(true)
        }



    }, [])

    const requestobj = addPost ? 'https://jsonplaceholder.typicode.com/posts' : `https://jsonplaceholder.typicode.com/posts/${params.id}`


    const methods = addPost ? "POST" : "PUT"
    function handleSubmit(e) {
        e.preventDefault()


        const temp_error = {}


        if (formData.title.length <= 5) {
            temp_error.title = " title length is less then 5"
        }
        else if (formData.body.length <= 5) {
            temp_error.body = "body length is less then 5"
        }
        else if (!formData.userId) {
            temp_error.userId = "userId is required";
        } else if (isNaN(formData.userId)) {
            temp_error.userId = "userId must be a number";
        }
        setError(temp_error)



        if (Object.keys(temp_error).length === 0) {
            axios({
                url: requestobj,
                method: methods,
                data: JSON.stringify({
                    id: params.id,
                    title: formData.title,
                    body: formData.body,
                    userId: formData.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                // .then((response) => response.json())
                .then((response) => console.log(response));

        }
    }




    return (
        <>
            <div className="main-form">


                <form className="form" onSubmit={handleSubmit}>

                    <div>

                        <label htmlFor="title">
                            Title
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
                    {error.title && <p>{error.title}</p>}
                    <div>

                        <label htmlFor="body">
                            Body
                        </label>
                    </div>

                    <div>

                        <textarea
                            className="body1"
                            type="text"
                            name="body"
                            id="body"
                            value={formData.body}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        {error.body && <p>{error.body}</p>}

                    </div>
                    <div>

                        <label htmlFor="userId1">
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
                    </div  >
                    {error.userId && <p>{error.userId}</p>}
                    <div className="update-btn">

                        <button  className="edit" type="submit"> {addPost ? "add" : "update"}</button>
                    </div>


                </form>
            </div>
        </>
    )
}