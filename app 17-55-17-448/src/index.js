import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Search from "./components/Search";
import TextSearch from './components/TextSearch'
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="AboutUs" element={<About />} />
        <Route path="HowItWorks" element={<HowItWorks />} />
        <Route path="Search" element={<Search />} />
        <Route path="textsearch" element={<TextSearch />} />
        <Route path="" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
