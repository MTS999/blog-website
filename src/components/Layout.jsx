

import Header from "./Header"
import Main from "./Main"
import PostList from "./PostList"
import Footer from "./Footer"
export default function Layout() {

    return (
        <>
            <div className="layout">

                <Header />
                <Main />
                <PostList />
                <Footer />
            </div>
        </>


    )
}