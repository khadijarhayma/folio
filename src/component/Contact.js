import React from "react";

function Contact() {
  return (
    <div>
     
    
        <h1 className="title">
          <span>Contact</span>
        </h1>
      

      <div className="contact">
        <div className="about">
          <h2> Informations de contact</h2>
          <h3>Adresse e-mail</h3>
          <a href="mailto:khadijarhayma@gmail.com">khadijarhayma@gmail.com</a>
          <h3>Téléphone</h3>
          <h3>27 386 733</h3>
        
        </div>
        <div className="envoi">
          <input
            placeholder="entrez votre nom"
            style={{ width: "225px", height: "31px" }}
          />
          <input
            placeholder="Votre adresse "
            style={{ width: "225px", height: "31px" }}
          />
          <input
            placeholder="Objet"
            style={{ width: "450px", height: "31px" }}
          />
          <input
            placeholder="Votre message"
            style={{ width: "450px", height: "100px" }}
          />
          <button >envoyer</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
