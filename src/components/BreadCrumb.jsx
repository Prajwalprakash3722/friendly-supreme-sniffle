import React, { useEffect } from "react";
import { Link } from "react-router-dom";

let url = window.location.href;
let url_params = url.split("/");
let file = url_params[url_params.length - 1];

function BreadCrumb() {
  const [breadcrumb, setBreadcrumb] = React.useState([]);
  useEffect(() => {
    let url = window.location.href;
    let url_params = url.split("/");
    if (url_params.includes("file")) {
    } else {
      let folder_url = url_params.slice(4, url_params.length);
      setBreadcrumb(folder_url);
    }
  }, []);

  const RenderCrumbs = () => {
    return breadcrumb.map((crumb, index) => {
      return (
        <>
          <span class="mx-5 text-gray-500 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <Link to={`/${crumb}`}>
            <span className="text-gray-600">{crumb}</span>
          </Link>
        </>
      );
    });
  };

  return (
    <>
      <div class="bg-gray-200 dark:bg-gray-800">
        <div class="container flex items-center px-6 py-4 mx-auto overflow-y-auto whitespace-nowrap">
          <Link to="/folders" class="text-gray-600 dark:text-gray-200">
            ${" "}
          </Link>
          {RenderCrumbs()}
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
