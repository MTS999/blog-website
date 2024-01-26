// import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
// import postData from "../data"
import Footer from "../components/Footer"
export default function Layout() {
//     const [myArray, setMyArray] = React.useState(postData);
//    console.log(myArray)
    return (
        <>
            <div className="layout">

                <Header />
             
                <Outlet />
                <Footer />
            </div>
        </>


    )
}