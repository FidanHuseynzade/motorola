import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to="/">
                    <img src="https://www.telecominvest.az/assets/front/img/logos/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="page">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={'/about'}>About us</Link>
                <Link to={"/products"}>
                    Products
                </Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/TelecomInvest/" target="_blank" rel="noopener noreferrer" className="fb">
                    <FacebookOutlined />
                </a>
                <a href="https://www.instagram.com/telecom.invest?igsh=ajBsMjc3MWo1MXdy" target="_blank" rel="noopener noreferrer" className="ig">
                    <InstagramOutlined />
                </a>
                <a href="https://www.linkedin.com/company/telecom-invest/" target="_blank" rel="noopener noreferrer" className="ln">
                    <LinkedinOutlined />
                </a>
            </div>
        </div>
    )
}

export default Navbar;
