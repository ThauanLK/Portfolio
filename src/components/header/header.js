import React from "react";
import "./header.css";

function header() {
  return (
    <div className="headerContainer">
      <div className="container">
        <div className="headerPosition">
          <div className="logo">Logo</div>
          <div className="btnsContainer">
            <button className="standardBtn">Contato</button>
            <button className="standardBtn">Sobre</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
