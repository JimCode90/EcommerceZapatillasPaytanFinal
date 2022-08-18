import React from 'react';
import {Link} from "react-router-dom";
import imgLogo from '../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/"><img src={imgLogo} alt="logo" /></Link>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Informacion</h3>

                            <ul className="information-links">
                                <li>
                                    <Link to="/blog-one">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contactanos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contactate con nosotros</h3>

                            <ul className="footer-contact-info">
                                <li><i className="fas fa-phone"></i> Call Us: <a href="#">(+51) 979792539</a></li>
                                <li><i className="far fa-envelope"></i> Email Us: <a href="#">jimmypaytan10@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
