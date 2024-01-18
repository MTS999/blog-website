

import blog_img from "../images/blog_img.png"
export default function Header() {

    return (
        <>
            <nav className="main">
                <div className="main-left">
                    <h1 className="heading">Articles for <span className="heading-span">front-end devs </span> </h1>
                    <p className="heading-detail">Articles on web performance ,responsive web design and more</p>
                </div>
                <div className="main-right">

                 <img className="blog-img" src={blog_img} alt="mts" />

                </div>

            </nav>
        </>


    )
}