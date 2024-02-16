import axios from "axios";
import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { TextField } from "@mui/material";

export default function PostEdit() {

    const [addPost, setAddPost] = React.useState(false)
    const [loader, setLoader] = React.useState(false)

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
    async function callAddApi() {
        setLoader(true)
     
        const addObject={
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
        }
            const result=await axios(addObject)
            console.log(result)
           


        if( addPost && result.status===201){
            setLoader(false)
        }
      else if(result.status===200){
        setLoader(false)

      }
        

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



    }, [location.state])

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
            callAddApi()
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
                            required
                        />
                    </div>
                    {error.title && <p className="error">{error.title}</p>}
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
                        {error.body && <p className="error">{error.body}</p>}

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
                            required

                        />
                    </div  >


                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                    {error.userId && <p className="error">{error.userId}</p>}
                    <div className="update-btn">

                        <button className="add edit" type="submit"> {addPost ? "add" : "update"}</button>
                    </div>


                </form>
            </div>
            {
                loader&&(
                    <div className="loader"></div>
                )
            }
            
        </>
    )
}