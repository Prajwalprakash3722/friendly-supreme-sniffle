import React, { useState } from "react";

function File({ file }) {
  function checkFileExtension(file) {
    var ext = file.split(".");
    if (ext.length > 1) {
      return ext[ext.length - 1];
    } else {
      return "folder";
    }
  }
  let fileType = checkFileExtension(file);

  return (
    <>
      <section className="group text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap group-hover:bg-slate-100 cursor-pointer rounded-md"
            // onDoubleClick={() => {
            //   if (fileType === "folder") {
            //     localStorage.setItem("currentFolder", file);
            //     const new_path =
            //       localStorage.getItem("currentFolder") + "/" + file;
            //     window.location.href = new_path;
            //     FolderStructure.push(file);
            //   } else {
            //     console.log(window.location.href);
            //     window.location.href = `/file/${file}`;
            //   }
            // }}
          >
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div>
                {fileType === "folder" ? (
                  <div className="flex items-center justify-center h-12 w-12">
                    <img
                      src="https://img.icons8.com/color/240/000000/folder-invoices--v2.png"
                      alt="folder"
                      onClick={() => {
                        let old_path = window.location.href;
                        if (old_path.includes("folders")) {
                          let elements = old_path.split("/");
                          let new_path = elements.join("/");
                          new_path = new_path.replace(
                            "folders",
                            "folder/" + file
                          );
                          window.location.href = new_path;
                        } else {
                          old_path = window.location.href;
                          let elements = old_path.split("/");
                          elements.push(file);
                          let new_path = elements.join("/");
                          window.location.href = new_path;
                          console.log(new_path);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-12 w-120">
                    <img
                      src="https://img.icons8.com/color/240/000000/file.png"
                      alt="file"
                      onClick={() => {
                        let old_path = window.location.href;
                        if (old_path.includes("folders")) {
                          let elements = old_path.split("/");
                          let new_path = elements.join("/");
                          new_path = new_path.replace(
                            "folders",
                            "file/" + file
                          );
                          window.location.href = new_path;
                        } else {
                          let old_path = window.location.href;
                          if (old_path.includes("folder")) {
                            let elements = old_path.split("/");
                            elements.push(file);
                            // console.log(elements);
                            const actual = elements.slice(4, elements.length);
                            // console.log("ac", actual);
                            let new_path = actual.join("-");
                            console.log(new_path);
                            window.location.href = `/file/${new_path}`;
                          }
                        }
                      }}
                    />
                  </div>
                )}
                <h3 className="text-gray-500 tracking-widest title-font text-lg">
                  {file}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default File;
