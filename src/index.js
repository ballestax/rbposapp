import React from "react";
import { render } from "react-dom";
import Head from "next/head";
import Home from "./components/Home";

const App = () => (
  <div>
    <Head>
      <title>Trying out next.js</title>
    </Head>
    <Home></Home>
  </div>
);

render(<App />, document.getElementById("root"));
