// import "./App.css";
// import Navbar from "./Components/Navbar";
// import {  BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {

//   return (
//     <BrowserRouter>
//       <Navbar />
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";

function App() {
  return (
    // <section
    //   className="h-screen bg-Hero bg-cover
    //   font-[Poppins] md:bg-top bg-center"
    // >
      <Navbar />
    //   <div className="flex flex-col justify-center text-center items-center h-3/4">
    //     <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
    //     <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
    //       Items every woman should have
    //     </h1>
    //     <div className="text-xl">
    //       {/* <Button /> */}
    //     </div>
    //   </div>
    // </section>
  );
}

export default App;
