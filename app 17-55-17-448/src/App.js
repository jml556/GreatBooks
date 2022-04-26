import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { useNavigate } from "react-router-dom";
import "./app.css";

const App = (props) => {
  return (
    <div className="appStyles">
      <div style={{ flexGrow: 1 }}>
        <h1>Euclid Search</h1>
        <nav style={{ marginBottom: 20, borderBottom: '1px solid #888', paddingBottom: 10 }}>
          <Link to="/AboutUs">About</Link> |{" "}
          <Link to="/HowItWorks">How It Works</Link> |{" "}
          <Link to="/Search">Search</Link>
        </nav>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
