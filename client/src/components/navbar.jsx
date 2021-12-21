import React, { Component } from "react";
import "../App.css";

// Stateless Functional Component
// Reference passed in arg in stateless component via props.value (not this.props.value)
const Navbar = (props) => {
    return (
        <div className={"l-navbar l-flex"}>
            <span
                id="tylerdouglas-logo"
                onClick={(event) => (window.location.href = "/aboutMe")}
                className={"l-left-margin"}
            >
                <img src={"https://picsum.photos/50"} alt="" />
            </span>
            <ul className={"c-menu l-right-margin"}>
                <li>
                    <a className={"c-menu-hyperlink"} href={"/blog"}>
                        Blog
                    </a>
                </li>
                <li>
                    <a className={"c-menu-hyperlink"} href={"/about"}>
                        About
                    </a>
                </li>
                <li>
                    <a className={"c-menu-hyperlink"} href={"/adyen"}>
                        Adyen
                    </a>
                </li>
                <li>
                    <a className={"c-menu-hyperlink"} href={"/projects"}>
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        id={"say_hello"}
                        className={"c-menu-hyperlink"}
                        href={"/contact_me"}
                    >
                        Say Hello
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
