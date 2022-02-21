import React from "react";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <div>
      <h2 className="top">
        <span>Apropos</span>
      </h2>
      <div className="apropo">
        <img src="https://snicolas.fr/wp-content/uploads/2019/11/laptop.png" />
        <div className="present">
          <p>
            Je suis bac+5 et J'ai effectué une certification de Full stack de
            Développement Web.
          </p>
          <p>
            Je souhaite continuer vers un contrat de professionnalisation dans
            le cadre d'une formation de Développeur Web en alternance, pour une
            durée de 12 mois. Secteur de la région gabisienne.
          </p>
          <div className="boton">
            <button>
              <a href="./Ingénieur en génie chimique.pdf" download>
                consulter mon CV
              </a>
            </button>
            <button>
              <Link to="/contact"> Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
