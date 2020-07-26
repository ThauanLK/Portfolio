import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Entre em contato comigo</h1>
      <div className="container">
        <form>
          <div className="formItens">
            <label>Nome:</label>
            <input placeholder="Digite seu nome..." />
          </div>
          <div className="formItens">
            <label>Email:</label>
            <input placeholder="Digite seu email..." type="email" />
          </div>
          <div className="formItens">
            <label>Mensagem:</label>
            <textarea
              placeholder="Digite sua mensagem..."
              type="text"
              rows="15"
            />
          </div>
          <input className="submitBtn" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
