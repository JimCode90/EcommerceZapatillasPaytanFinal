import {useEffect, useState} from "react";
import ProductItem from "../ProductItem/ProductItem.jsx";
import { db } from '../../firebase/Firebase.js'
import { collection, query, limit, getDocs } from 'firebase/firestore';

const ProductLatestContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'productos'), limit(8))
        getDocs(q)
            .then(result => {
                console.log(q)
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProducts(lista)
            })
    }, []);

    return (
        <div className="mt-4">
            <div className="all-products-area pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> LO MAS VENDIDO</h2>
                    </div>
                    <div className="row">
                        <ProductItem products={products} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLatestContainer;
      