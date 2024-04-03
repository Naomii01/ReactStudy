import React from "react";
import NavBar from "../components/NavBar";


function Mainlayout({children}) {
  return (
    <div>
      <NavBar></NavBar>
      <div>{children}</div>
      <div>Here is sidebar</div>
    </div>
  );
}

export default Mainlayout;
