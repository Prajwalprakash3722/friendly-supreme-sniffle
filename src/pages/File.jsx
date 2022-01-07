import React, { useEffect, useState } from "react";
import axios from "axios";
import api_link from "../etc/api";
import "../css/File.css";

// get url params
let url = window.location.href;
let url_params = url.split("/");
let file_name = url_params[url_params.length - 1];

function File() {
  const [filedata, setFiledata] = useState("");
  useEffect(() => {
    axios.get(api_link + `/service/file/${file_name}`).then((res) => {
      setFiledata(res.data);
      console.log(res.data);
    });
  }, []);
  // TODO : add file CRUD (create, update, delete) Operations only for admin and administrator
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-2xl text-slate-900 m-2">
          <span className="text-red-600">{file_name} </span>
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
