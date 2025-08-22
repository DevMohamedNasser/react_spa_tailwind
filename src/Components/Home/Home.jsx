import React from "react";
import avatarImg from "../../assets/Images/avataaars.svg";
import styles from "./Home.module.css";
// import "../Navbar/Navbar.css"

export default function Home() {
  return (
    <div
      className={`mt-12 pt-3 ${styles.homeSection} text-white flex flex-col justify-center items-center`}
    >
      <img src={avatarImg} className="w-1/2 md:w-1/4" alt="Avatar" />
      <h2 className="text-center uppercase">start Framework</h2>
      <div className={`starLine ${styles.starLineContact} mb-4 flex justify-center items-center`}>
        <i className="fas fa-star flex justify-center items-center"></i>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
