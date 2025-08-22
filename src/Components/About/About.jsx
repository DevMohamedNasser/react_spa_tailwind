import React from "react";
import master from "./About.module.css";

export default function About() {
  return (
    <div className={`mt-16 pt-3 ${master.aboutSec} px-5 text-center text-white flex flex-col justify-center items-center`}>
      {/* <div className="container-fluid container-md"> */}
        <h2 className="uppercase">about component</h2>
        <div className="starLine mb-4 flex justify-center items-center">
          <i className="fas fa-star flex justify-center items-center"></i>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className=" px-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className=" px-5">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
