import React from "react";
import NavBar from "./components/NavBar";
import Home from "././pages/Home";
import Files from "././pages/Files";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const listItems = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "Files",
      path: "/files",
      element: <Files />,
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
