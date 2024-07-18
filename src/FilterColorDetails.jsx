import React from "react";
import { useParams } from "react-router-dom";
import ColorDetails from "./ColorDetails";

const FilterColorDetails = function({colors}) {
    const {color} = useParams();

    if (color) {
        const currentColor = colors.find(
            c => c.name.toLowerCase() === color.toLowerCase()
        );
        return <ColorDetails color={currentColor}/>;
    }
    return null;
}

export default FilterColorDetails;