
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Main from "../components/Main"
// import PostList from "../components/PostList"
import Footer from "../components/Footer"
export default function Layout() {

    return (
        <>
            <div className="layout">

                <Header />
                {/* <Main /> */}
                {/* <PostList /> */}
                <Outlet />
                <Footer />
            </div>
        </>


    )
}