import React from "react";
import { Link } from "react-router-dom";

const Navigateur = () => {
  return (
    <div className="nav">
      <img
        width="125"
        height="70"
        src="https://snicolas.fr/wp-content/uploads/2019/11/logo.png"
        className="custom-logo"
        alt="Logo"
      />
      <Link to="/">Accueil</Link>
      <Link to="/apropos"> apropos </Link>
      <Link to="/Competance">competance</Link>
      <Link to="/contact">Contact</Link>
     
    </div>
  );
};

export default Navigateur;
