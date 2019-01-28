import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import logoImage from "./../images/logo.svg";

import "./../../App.css";


class Footer extends Component {
 
  render() {
   
    return (
            <div>
                <div className="footer-cols">
                    <ul>
                        <li> Workshops </li>
                        <li>
                        <a href="">Music</a>
                        </li>
                        <li>
                        <a href="">Movies</a>
                        </li>
                        <li>
                        <a href="">Shows</a>
                        </li>
                        <li>
                        <a href="">Apps</a>
                        </li>
                        <li>
                        <a href="">Gift-Cards</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>
                        <a href="">Find a Store</a>
                        </li>
                        <li>
                        <a href="">Today at Muses</a>
                        </li>
                        <li>
                        <a href="">Muses Camp</a>
                        </li>
                        <li>
                        <a href="">Financing</a>
                        </li>
                        <li>
                        <a href="">Order Status</a>
                        </li>
                    </ul>
                    <ul>
                        <li> Our Team </li>
                        <li>
                        <a href="">Muses & Education</a>
                        </li>
                        <li>
                        <a href="">Shop For College</a>
                        </li>
                        <li>
                        <a href="">Muses campaign</a>
                        </li>
                        <li>
                        <a href="">Muses offers </a>
                        </li>
                        <li>
                        <a href=""> Jobs </a>
                        </li>
                    </ul>
                    <ul>
                        <li> Chapters </li>
                        <li>
                        <a href="">Newsroom</a>
                        </li>
                        <li>
                        <a href="">Muses Leadership</a>
                        </li>
                        <li>
                        <a href="">Investors</a>
                        </li>
                        <li>
                        <a href="">Events</a>
                        </li>
                        <li>
                        <a href="">Contact Muses</a>
                        </li>
                    </ul>   
                </div>
                <div className ="footer-bottom text-center">Copyright &copy; 2019 Muses</div>
            </div>
    );
  }
}

export default Footer;






 