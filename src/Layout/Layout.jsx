import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Axious from "../components/Axious"
import Footer from "../components/Footer"
export default function Layout() {
//     const [myArray, setMyArray] = React.useState(postData);
//    console.log(myArray)
    return (
        <>
            <div className="layout">

                <Header />
                <Axious/>
                <Outlet />
                <Footer />
            </div>
        </>


    )
}