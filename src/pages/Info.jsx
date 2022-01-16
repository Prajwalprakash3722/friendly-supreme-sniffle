import React from "react";
import axios from "axios";
import api_link from "../etc/api";
function Info() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    axios
      .get(api_link + "/service/info", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center text-blue-500 text-2xl font-bold">Info</h1>
      <div className="flex flex-col items-center justify-center">
        <table>
          <tbody>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Name:
                </span>
              </td>
              <td>{data.hostname}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Platform:
                </span>
              </td>
              <td>{data.platform}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Version:
                </span>
              </td>
              <td>{data.release}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Uptime:
                </span>
              </td>
              <td>{data.uptime}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Total Memory:
                </span>
              </td>
              <td>{data.totalmem}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server Free Memory:
                </span>
              </td>
              <td>{data.freemem}</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server CPU:
                </span>
              </td>
              <td>Intel(R) Core(TM) i7-10750H CPU @ 4.60GHz</td>
            </tr>
            <tr>
              <td>
                <span className="text-blue-500 text-lg font-bold">
                  Server User:
                </span>
              </td>
              <td>{data.user.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Info;
