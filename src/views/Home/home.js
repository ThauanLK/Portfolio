import React from "react";
import "./home.css";
import Item from "./ItensOfList";

function Home(props) {
  return (
    <div>
      <div className="container">
        <h1>Meus repositórios</h1>
        <section className="list">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </section>
        <p className="link">
          Para ver a lista completa acesse:{" "}
          <a href="https://github.com/ThauanLK"> https://github.com/ThauanLK</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
