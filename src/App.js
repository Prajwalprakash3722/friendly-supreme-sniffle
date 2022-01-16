import React, { useState } from "react";
import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";
import Home from "././pages/Home";
import Folders from "././pages/Folders";
import File from "././pages/File";
import Login from "././pages/Login";
import Info from "./pages/Info";
import { StackContext } from "./etc/StackContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Folder from "./pages/Folder";
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
      name: "Folder",
      path: "/folder/:folder_name",
      element: <Folder />,
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
    {
      name: "Info",
      path: "/server",
      element: <Info />,
    },
  ];
  const stack = useState(["/"]);
  return (
    <>
      <StackContext.Provider value={stack}>
        <Router>
          <NavBar />
          <BreadCrumb />
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
