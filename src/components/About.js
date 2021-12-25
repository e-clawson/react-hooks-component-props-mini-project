import React from "react";
import blogData from "../data/blog";


function About() {
    return (
        <aside>
          <img alt = "blog logo">{blogData.image ? {blogData.image} : "https://via.placeholder.com/215" }</img>
          <p>{blogData.about}</p>
        </aside>
    )
};

export default About;