import React from "react";
import background from "./assets/background.jpg";
import SignIn from "./components/form";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "150px 15px 15px 15px",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <SignIn />
    </div>
  );
};

export default App;
