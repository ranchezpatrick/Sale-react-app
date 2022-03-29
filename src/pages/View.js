
import React, {useState, uesEffect, useEffect, useReducer} from 'react';
import fireDb from "../firebase";
import { useParams, Link } from 'react-router-dom';
import "./View.css";


const View = () => {
    const [item, setItem] = useState({});

    const {id} = useParams();
    useEffect(() => {
        fireDb.child(`sales/${id}`).get().then((snapshot) => {
            if(snapshot.exists()) {
                setItem({...snapshot.val()})
            }  else {
                setItem({});
            }    
        })
    }, [id])

    console.log("item", item);
    return (
        <div style={{marginTop: "150px"}}>
            <div className="card">
                <div className="card-header">
                    <p>Item Details</p>
                </div>
                <div className="container">
                    <strong>ID: </strong>
                    <span>{id}</span>
                    <br />
                    <br />
                    <strong>Name: </strong>
                    <span>{item.name}</span>
                    <br />
                    <br />
                    <strong>Category: </strong>
                    <span>{item.category}</span>
                    <br />
                    <br />
                    <strong>Cost: </strong>
                    <span>{item.cost}</span>
                    <br />
                    <br />
                    <Link to="/">
                        <button className="btn btn-edit"> Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default View;