import React, { useEffect, useState } from "react";
import axios from "axios";
import File from "../components/Icon";
import api_link from "../etc/api";

function Folders() {
  const [files, setFiles] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(0);
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrormessage] = useState("");
  const [folderPath, setFolderPath] = useState(
    window.location.href
      .split("/")
      .slice(4, window.location.href.split("/").length)
      .join("-")
  );

  const HandleFolderModal = (e) => {
    e.preventDefault();
    const newpath = folderPath + "-" + folderName;
    setFolderPath(newpath);
    axios
      .post(
        api_link + "/service/folder",
        { path: folderName },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data === true) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        } else {
          setError(true);
          setErrormessage("Duplicate Folder Name");
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      });
    setModal(0);
    setFolderName("");
  };
  useEffect(() => {
    axios
      .get(api_link + "/service/list", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFiles(res.data);
      });
    setToken(localStorage.getItem("token"));
    if (token) {
      axios
        .get(api_link + "/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data[0]);
        });
    }
  }, [success, token]);

  return (
    <>
      {error && (
        <>
          <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
            <div class="flex items-center justify-center w-12 bg-red-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-red-500 dark:text-red-400">
                  Error
                </span>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {success && (
        <>
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
            <div className="flex items-center justify-center w-12 bg-emerald-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  Success
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  Created Folder
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {files.map((file, index) => (
            <File file={file} key={index} />
          ))}
        </div>
        {user.role !== "user" && (
          <div className="fixed bottom-0 right-0 mb-4 mr-4">
            <div className="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                <button
                  onClick={() => {
                    modal === 1 ? setModal(0) : setModal(1);
                  }}
                  className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="mx-1">
                    {modal === 2 ? "Close" : "Upload File"}
                  </span>
                </button>

                <button
                  onClick={() => {
                    modal === 2 ? setModal(0) : setModal(2);
                  }}
                  className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                  <span className="mx-1">
                    {modal === 2 ? "Close" : "Create File"}
                  </span>
                </button>

                <button
                  onClick={() => {
                    modal === 3 ? setModal(0) : setModal(3);
                  }}
                  className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  {modal === 3 ? (
                    <img
                      src="https://img.icons8.com/material-rounded/24/000000/multiply-2.png"
                      alt="dsad"
                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png"
                      alt="adsad"
                    />
                  )}
                  <span className="mx-1">
                    {modal === 3 ? "Close" : "New Folder"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {modal === 3 ? (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                New Folder Name
              </h1>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Folder Name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <button
                onClick={HandleFolderModal}
                className="bg-indigo-500 px-7 py-2 m-2 rounded-md text-md text-white font-semibold"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  setModal(0);
                }}
                className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : null}
      {modal === 1 ? (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                Upload File
              </h1>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
                type="file"
                placeholder="Upload File"
                // value={folderName}
                // onChange={(e) => setFolderName(e.target.value)}
              />
              <button
                // onClick={}
                className="bg-indigo-500 px-7 py-2 m-2 rounded-md text-md text-white font-semibold"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  setModal(0);
                }}
                className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : null}
      {modal === 2 ? (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                New File Name
              </h1>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Folder Name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <textarea
                rows={10}
                cols={50}
                className="w-full px-4 py-2 mt-5 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="File Content"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <button
                onClick={HandleFolderModal}
                className="bg-indigo-500 px-7 py-2 m-2 rounded-md text-md text-white font-semibold"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  setModal(0);
                }}
                className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Folders;
