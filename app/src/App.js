import React from "react";
import background from "./assets/background.jpg";
import SignIn from "./components/form";

const App = (props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "150px 15px 15px 15px",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {props.children}
    </div>
  );
};

export default App;
