// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import ReactDOM from "react-dom/client";
// import App from "./components/App/App";
// import "modern-normalize";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);