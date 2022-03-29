import React, {useState, useEffect}from 'react';
import {useHistory, useParams} from "react-router-dom";
import './AddEdit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify";


const initialState = {
    name: "",
    size: "",
    cost: "",
    category: "",

}
const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const {name, size, category, cost} = state;
    const handleInputChange = () => {};
    const handleSubmit = () => {};
    return (
        <div style={{marginTop: "100px"}}>
            <form style={{
                margin: "auto", 
                padding: "15px", 
                maxWidth: "400px", 
                alignContent: "center"
                }}
                onSubmit={handleSubmit}
            >


                <label htmlFor="name">
                Name
                </label>
                <input 
                type="text"
                id= "name"
                name= "name"
                placeHolder= "Your Name..."
                value={name}
                onChange={handleInputChange}
                />

                <label htmlFor="cost">
                Cost
                </label>
                <input 
                type="number"
                id= "size"
                name= "size"
                placeHolder= "Small, Medium or Large"
                value={name}
                onChange={handleInputChange}
                />

                <label htmlFor="size">
                Size
                </label>
                <input 
                type="text"
                id= "cost"
                name= "cost"
                placeHolder= "Cost"
                value={name}
                onChange={handleInputChange}
                />

                <label htmlFor="category">
                Category
                </label>
                <input 
                type="text"
                id= "category"
                name= "category"
                placeHolder= "Category"
                value={name}
                onChange={handleInputChange}
                />  

                <input type="submit" value="Save" />
                </form>
        </div>
    )
}

export default AddEdit;