import {Link} from "react-router-dom";
import imgLogo from '../assets/img/logo.png'
import CardWidget from "../components/CardWidget.jsx";

const NavBar = () => {
    return (
        <div>
            <div className="navbar-area">
                <div className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link to="/">
                                <img src={imgLogo} alt="logo"/>
                            </Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-relative">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item p-relative">
                                        <Link to="/" className="nav-link">
                                            Tienda <i className="fa fa-chevron-down"></i>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/">
                                                    Productos
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item p-relative">
                                        <Link to="/" className="nav-link">
                                            Contacto
                                        </Link>
                                    </li>
                                </ul>
                                <CardWidget />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
