import React, { useEffect, useState } from "react";
import axios from "axios";
import File from "../components/Icon";
import api_link from "../etc/api";

let url = window.location.href;
let url_params = url.split("/");
let folder_url = url_params.slice(4, url_params.length).join("-");
console.log(folder_url);
function Folder() {
  const [files, setFiles] = useState([]);

  const MakeRequest = () => {
    console.log(api_link + "/service/" + folder_url);
  };
  const [folderPath, setFolderPath] = useState(
    window.location.href
      .split("/")
      .slice(4, window.location.href.split("/").length)
      .join("/")
  );
  useEffect(() => {
    axios
      .get(api_link + "/service/folder/" + folder_url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setFiles(res.data);
        console.log("Ending Request");
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {files.map((file, index) => (
            <File file={file} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folder;
