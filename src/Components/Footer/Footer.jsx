import React from "react";
import master from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`text-white bg-[#2C3E50]`}>
      <div className="fluid md:container py-12 footerInfo">
        <div className="grid md:grid-cols-3 gap-15 md:gap-0">
          <div className="text-center">
            <h3>Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="text-center">
            <h3>AROUND THE WEB</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="setIcon">
                <i className="fab fa-facebook-f text-white text-lg"></i>
              </div>
              <div className="setIcon">
                <i className="fab fa-twitter text-white text-lg"></i>
              </div>
              <div className="setIcon">
                <i className="fab fa-linkedin-in text-white text-lg"></i>
              </div>
              <div className="setIcon">
                <i className="fas fa-globe text-white text-lg"></i>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              me.
            </p>
          </div>
        </div>
      </div>

      <div className={`${master.copyRights} bg-[#1a252f] text-white text-center p-3`}>
        Copyright &copy;Your Website 2025
      </div>
    </div>
  );
}
