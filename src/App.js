import React from "react";
import NavBar from "./components/NavBar";
import Home from "././pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const listItems = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {listItems.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
