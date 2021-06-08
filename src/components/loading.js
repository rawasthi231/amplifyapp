import React from 'react';
import Loader from "./images/loader.gif";
import './css/style.css';

const Loading = () =>{
    return(
        <div className="container-fluid">
            <div className="loading">
                <img className="img-fluid" src={Loader} alt="loader" />
            </div>
        </div>
    )
}

export default Loading;