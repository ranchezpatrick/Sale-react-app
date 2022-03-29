import React, {useState, useEffect}from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './AddEdit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify";


const initialState = {
    name: "",
    size: "",
    cost: "",
    category: "",
    price: "",
    amount: "",

}
const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const {name, size, category, cost, price, amount} = state;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        fireDb.child("sales").on("value", (snapshot) => {
            if(snapshot.val()!==null){
                setData({...snapshot.val()})
            } else {
                setData({});
            }
        });

        return () =>{
            setData({})
        }
    }, [id]);

    useEffect(() => {
        if(id) {
            setState({...data[id]});
        } else {
            setState({...initialState});
        }

        return() => {
            setState({...initialState});
        }
    }, [id, data])
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !cost || !category || !price || !amount) {
            toast.error("Please provide a value in each required input field")
        } else {
            if(!id) {
                fireDb.child("sales").push(state, (err) => {
                    if(err) {
                        toast.error(err);
                    } else {
                        toast.success("Item Added Successfully");
                    }
                });   
            } else {
                fireDb.child(`sales/${id}`).set(state, (err) => {
                    if(err) {
                        toast.error(err);
                    } else {
                        toast.success("Item Updated Successfully");
                    }
                });
            }
        
            setTimeout(() => navigate("/"), 500)
        }
    };
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
                placeHolder= "Item Name"
                value={name || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="cost">
                Cost
                </label>
                <input 
                type="number"
                id= "cost"
                name= "cost"
                placeHolder= "Cost"
                value={cost || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="size">
                Size - optional
                </label>
                <input 
                type="text"
                id= "size"
                name= "size"
                placeHolder= "Small, Medium or Large"
                value={size || ""}
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
                value={category || ""}
                onChange={handleInputChange}
                /> 

                <label htmlFor="price">
                Price
                </label>
                <input 
                type="text"
                id= "price"
                name= "price"
                placeHolder= "Price"
                value={price || ""}
                onChange={handleInputChange}
                /> 

                <label htmlFor="amount">
                Amount
                </label>
                <input 
                type="text"
                id= "amount"
                name= "amount"
                placeHolder= "Amount"
                value={amount || ""}
                onChange={handleInputChange}
                />    

                

                <input type="submit" value={id ? "Update" : "Save"} />
                </form>
        </div>
    )
}

export default AddEdit;