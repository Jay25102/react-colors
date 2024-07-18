import React from "react";
import { Navigate, Link } from "react-router-dom";

const ColorDetails = function({color}) {
    if (!color) return <Navigate to="/colors"/>

    return (
        <div>
            <h2 style={{color: `${color.colorCode}`}}>{color.name}</h2>
            <Link to="/colors">Home</Link>
        </div>
    )
}

export default ColorDetails;