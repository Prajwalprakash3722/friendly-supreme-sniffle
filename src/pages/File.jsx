import React, { useEffect, useState } from "react";
import axios from "axios";
import api_link from "../etc/api";
import "../css/File.css";

// get url params

function File() {
  const [filedata, setFiledata] = useState("");
  useEffect(() => {
    let url = window.location.href;
    let url_params = url.split("/");
    const path = url_params.slice(4, url_params.length);
    const folder_url = path[0];
    const fileName = folder_url.split("-").pop();
    axios
      .post(
        api_link + "/service/file",
        { path: folder_url },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setFiledata(res.data);
      });
  }, []);
  // TODO : add file CRUD (create, update, delete) Operations only for admin and administrator
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-2xl text-slate-900 m-2">
          <span className="text-red-600">lol</span>
          File Content
        </h1>
        <div className="text-lg text-neutral-600 font-mono flex flex-row justify-center items-center">
          <pre className="bg-slate-700">
            <code className="inline p-2">{filedata}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default File;
