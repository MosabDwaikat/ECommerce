// import logo from "./logo.svg";
// import "./App.css";
// import Router from "./Router.js";

// function App() {
//   return <Router />;
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import Router from "./Router.js";
import Card from "./components/Card";
import Product from "./components/product";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Router />
      <Features/>
     
    </>
  );
}

export default App;
