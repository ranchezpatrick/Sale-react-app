import React, {useState, useEffect} from 'react';
import fireDb from "../firebase";
import { Link } from 'react-router-dom';
import "./Home.css";
import { toast } from 'react-toastify';


const Home = () => {
    const [data, setData] = useState({});


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
    }, []);

    const onDelete = (id) => {
        if(window.confirm("Are you sure? ")) {
            fireDb.child(`sales/${id}`).remove((err) => {
                if(err){
                    toast.error(err)
                    
                }else {
                    toast.success("Item Deleted Successfully");
                }
            });
        }
    }
    return (
        <div style={{marginTop: "100px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Size</th>
                        <th style={{textAlign: "center"}}>Category</th>
                        <th style={{textAlign: "center"}}>Cost</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "center"}}>Amount</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) =>{
                        return (
                            <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].size}</td>
                                <td>{data[id].category}</td>
                                <td>{data[id].cost}</td>
                                <td>{data[id].price}</td>
                                <td>{data[id].amount}</td>

                                
                                    <Link to={`/update/${id}`}>
                                    <button className="btn btn-edit">Edit</button>
                                    </Link>
                                  
                                    <button className="btn btn-delete" onClick={() => onDelete(id)}>Delete</button>
                               
                                    <Link to={`/view/${id}`}>
                                    <button className="btn btn-view">View</button>
                                    </Link>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home;