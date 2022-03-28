import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Header.css"

const Header = () => {
    const [activeTab, setActivetab] = useState("Home");
    return (
        <div className="header">
            <p className="logo">Sale App</p>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} 
                        onClick={() => setActivetab("Home")}>
                        Home 
                    </p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "Add" ? "active" : ""}`} 
                        onClick={() => setActivetab("Add")}>
                        Add 
                    </p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`} 
                        onClick={() => setActivetab("About")}>
                        About 
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header;