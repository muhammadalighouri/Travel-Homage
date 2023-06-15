import React from "react";
import { connect, useSelector } from "react-redux";
import "../scss/Loader.css";

const Loading = () => {

    return (
        <div className="fullscreen-loader">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
