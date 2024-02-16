
 import { Button } from "@mui/material"
import blog_img from "../images/blog_img.png" 
import { useNavigate } from "react-router-dom"
export default function Header() {
  const navigate=useNavigate()
    return (
        <>
            <nav className="main">
                <div className="main-left">
                    <h1 className="heading">Articles for <span className="heading-span">front-end devs </span> </h1>
                    <p className="heading-detail">Articles on web performance ,responsive web design and more</p>
                    {/* <button className="add-btn" onClick={() => navigate("/addPost")}>ADD POST <i className="nf nf-oct-file_added"></i>     </button> */}
                    <Button 
                    // size="large"
                    
                    variant="contained" 
                    color="secondary"  
                    className="mts111"
                    // className="add-btn" 
                    onClick={() => navigate("/addPost")}
                    >ADD POST <i className="nf nf-oct-file_added"></i>     </Button>
                </div>
                <div className="main-right">

                 <img className="blog-img" src={blog_img} alt="mts" />

                </div>

            </nav>
        </>


    )
}