import React from "react";
import { NavLink } from "react-router-dom";

const ColorsIndex = function({colors}) {

    return (
        <div className="colorsIndex">
            {colors.map(c => (
                <NavLink key={c.name} to={`/colors/${c.name.toLowerCase()}`}>
                    {c.name}
                </NavLink>
            ))}
            <NavLink to={`/colors/new`}>Add a new color</NavLink>
        </div>
    )
}

export default ColorsIndex;