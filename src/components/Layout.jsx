
import postData from "../data"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import Header from "./Header"
import Main from  "./Main"
import PostList from "./PostList"
import F
export default function Layout() {

    return (
        <>
            <div className="layout">

                <Header />
                <Main />
                <PostList/>

            </div>
        </>


    )
}