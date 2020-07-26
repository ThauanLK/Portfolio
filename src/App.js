import React from "react";
import Layout from "../src/components/Layout/Layout";
import Home from "./views/Home/home";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <div>
      <Layout>
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
