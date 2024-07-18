import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewColorForm = function({addColor}) {
    const initialState = {
        name: "",
        colorCode: "",
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    
    const handleChange = function(e) {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = function(e) {
        e.preventDefault();
        addColor({
            name: formData.name,
            colorCode: formData.colorCode
        });
        setFormData(initialState);
        navigate("/colors");
    }

    return (
        <div>
            <div>Add a new color!</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color name: </label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="something fun!"
                    onChange={handleChange}
                    value={formData.name}
                ></input>
                <label htmlFor="colorCode">Choose a color: </label>
                <input 
                    id="colorCode" 
                    name="colorCode" 
                    type="color"
                    onChange={handleChange}
                    value={formData.colorCode}
                ></input>
                <button type="submit">Add!</button>
            </form>
            <Link to="/colors">Home</Link>
        </div>
    )
}

export default NewColorForm;