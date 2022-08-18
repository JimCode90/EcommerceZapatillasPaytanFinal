import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({products}) => {
    return (
        <>
            {
                products.map(prod => (
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-product-box">
                            <div className="product-image">
                                <Link to="/">
                                    <img src={prod.img} alt="img_demo"/>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <i className="far fa-eye"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h3>
                                    <Link to="">
                                        { prod.nombre }
                                    </Link>
                                </h3>
                                <div className="product-price">
                        <span className="new-price">
                            S/ { prod.precio }
                        </span>
                                </div>
                                <Link to="" className="btn btn-light">
                                    Agregar al Carrito
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductItem;
