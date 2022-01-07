import React, { useState } from "react";
import { StackContext } from "../etc/StackContext";

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

  const FolderStructure = StackContext;
  console.log(FolderStructure);
  return (
    <>
      <section class="group text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div
            class="flex flex-wrap group-hover:bg-slate-100 cursor-pointer rounded-md"
            onDoubleClick={() => {
              if (fileType === "folder") {
                window.location.href = `/folder/${file}`;
                FolderStructure.push(file);
              } else {
                window.location.href = `/file/${file}`;
              }
            }}
          >
            <div
              class="lg:w-1/4 md:w-1/2 p-4 w-full"
              onClick={() => {
                if (fileType === "folder") {
                  window.location.href = `/folder/${file}`;
                } else {
                  window.location.href = `/file/${file}`;
                }
              }}
            >
              <div>
                {fileType === "folder" ? (
                  <div class="flex items-center justify-center h-12 w-12">
                    <img
                      src="https://img.icons8.com/color/240/000000/folder-invoices--v2.png"
                      alt="folder"
                    />
                  </div>
                ) : (
                  <div class="flex items-center justify-center h-12 w-120">
                    <img
                      src="https://img.icons8.com/color/240/000000/file.png"
                      alt="file"
                    />
                  </div>
                )}
                <h3 class="text-gray-500 tracking-widest title-font text-lg">
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
