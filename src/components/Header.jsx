
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
export default function Header() {

    return (
        <>
            <nav className="navbar">
                <div className="left">
                    <img className="logo" src={logo} alt="logo here" />
                    <Link className="left-link" to={"*"}>work
                        <i className="nf nf-fa-lock"></i>
                    </Link>
                    <Link className="left-link" to={"*"}>services
                        <i className="nf nf-md-cup"></i>

                    </Link>
                    <Link className="left-link" to={"*"}>about
                        <i className="nf nf-md-heart"></i>

                    </Link>

                </div>
                <div className="right">

                    <Link className="right-link" to={"*"}>blog
                        <i className="nf  nf-md-message mts"></i>
                    </Link>
                    <Link className="right-link btn1" to={"*"}>planer
                        <i className="nf  nf-md-leaf mts"></i>

                    </Link>


                </div>

            </nav>
        </>


    )
}