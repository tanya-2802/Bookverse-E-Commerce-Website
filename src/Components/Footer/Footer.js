import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='footer-container'>
            <ul className='footer-list'>
                <li><h2>ABOUT</h2></li>
                <li> <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}><p>Contact Us</p></Link></li>
                <li><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
    <p>About us</p>
  </Link></li>
                
            </ul>
            <ul className='footer-list'>
                <li><h2>HELP</h2></li>
                <li><p>Payments</p></li>
                <li><p>Shipping</p></li>
                <li><p>Cancellation & Returns</p></li>
                <li><p>FAQs</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>SOCIALS</h2></li>
                <li>
                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/" rel="noreferrer" target="_blank">
                        <p>Github</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                        <p>Facebook</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export { Footer } 