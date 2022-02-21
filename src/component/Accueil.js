import React from "react";
import { Link } from "react-router-dom";
import Apropos from "./Apropos";
import Competance from "./Competance";
import Contact from "./Contact";

function Accueil() {
  return (
    <div className="accueil">
      <div className="hello">
        <h1 className="name">KHADIJA Rhayma</h1>
        <p> DEVELOPPEUR WEB FULL STACK JUNIOR</p>
        <button>
          <Link to="/contact"> Contact</Link>
        </button>
      </div>
      <Apropos />
      <Competance />
      <Contact />
    </div>
  );
}

export default Accueil;
