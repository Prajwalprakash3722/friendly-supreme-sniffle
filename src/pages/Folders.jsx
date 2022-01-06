import React, { useEffect, useState } from "react";
import axios from "axios";
import File from "../components/Icon";
import api_link from "../etc/api";
function Folders() {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios.get(api_link + "/service/list").then((res) => {
      setFiles(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {files.map((file) => (
            <File file={file} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folders;
