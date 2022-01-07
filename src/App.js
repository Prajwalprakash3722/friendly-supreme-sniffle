import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "././pages/Home";
import Folders from "././pages/Folders";
import File from "././pages/File";
import Login from "././pages/Login";
import { StackContext } from "./etc/StackContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const listItems = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "Folders",
      path: "/folders",
      element: <Folders />,
    },
    {
      name: "File",
      path: "/file/:file",
      element: <File />,
    },
    {
      name: "Login",
      path: "/login",
      element: <Login />,
    },
  ];
  const stack = useState(["/"]);
  return (
    <>
      <StackContext.Provider value={stack}>
        <Router>
          <NavBar />
          <Routes>
            {listItems.map((item) => (
              <Route path={item.path} element={item.element} />
            ))}
          </Routes>
        </Router>
      </StackContext.Provider>
    </>
  );
}

export default App;
