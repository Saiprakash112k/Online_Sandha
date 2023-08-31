import React from "react";
import "./Footer.css"
const Footer = ()=>{


    return(
        <>
        <div className="footer">
            <footer className="d-flex">
            <div className="location">
<h3>
    Location:
</h3>
<div>
    <p>
    456, Green Avenue
Saket Nagar
New Delhi, Delhi - 110017
India
    </p>
</div>
            </div>
            <div className="single-line"></div>
            <div className="contact">
<ul>
    <li><i class="fa fa-phone" aria-hidden="true"></i>+91 78 06 89 95 61</li>
    <li><i class="fa fa-envelope" aria-hidden="true"></i>gjsai2k@gmail.com</li>
    <li><i class="fa fa-link" aria-hidden="true"></i>linkedin.com/in/sai-prakash-govindaraj-10982b219</li>
</ul>
            </div>
            </footer>
        </div>
        </>
    )
}
export default Footer;