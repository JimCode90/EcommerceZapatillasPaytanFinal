import React from 'react';
import {Link} from "react-router-dom";

const CardWidget = () => {
    return (
        <div className="others-option">
           <div className="option-item">
               <Link to="">
                   Cart <i className="fas fa-shopping-bag"></i>
               </Link>
           </div>
        </div>
    );
};

export default CardWidget;
