import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from './components/about.js'
import { render } from "react-dom";
import SignIn from "./components/form";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App><SignIn/></App>}></Route>
      <Route path="/about" element={<App><About /></App>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
