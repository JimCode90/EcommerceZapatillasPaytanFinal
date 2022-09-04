import {Link} from "react-router-dom";
import FormCheckout from "../components/FormCheckout/FormCheckout.jsx";


function Checkout(props) {
    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
            <div className="checkout-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <i className="fas fa-sign-in-alt"></i>
                                <span>
                                    Estas registrado?
                                    <Link to="/login">Click para iniciar sesión</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="row">
                            <FormCheckout />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;