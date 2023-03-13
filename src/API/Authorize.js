// import { config } from "dotenv";
// import endPoint from "./base";

// config();
// function authoriseUser() {
//   fetch(endPoint.authorize, {
//     method: "GET",
//     body: {
//       response_type: "code",
//       client_id: process.env.clientID,
//       redirect_uri: "http://localhost:3000/",
//     },
//   });
// }

// async function getAccessToken(code) {
//   const { access_token, refresh_token } = await fetch(endPoint.access_token, {
//     method: "POST",
//     "content-type": "application/x-www-form-urlencoded",
//     form: {
//       code: code,
//       grant_type: "authorization_code",
//     },
//     headers: {
//       Authorization:
//         "Basic " +
//         Buffer.from(
//           process.env.clientID + ":" + process.env.clientSecret
//         ).toString("base64"),
//     },
//     json: true,
//   });
//   const value = {
//     access_token,
//     refresh_token,
//     entry_time: Date.now(),
//     expires_in,
//   };
//   localStorage.setItem("lastname", "Smith");
// }

// async function getTrack() {
//   const track = await fetch(endPoint.track, {
//     header: {
//       Authorization: "Bearer" + access_key,
//     },
//   });
// }

import React, { useEffect, useState } from "react";

const Authorize = () => {
  const CLIENT_ID = "e4c40b133b56404e8c977570ccb7d9ab";
  const Authorize_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      console.log(token);
    }
    setToken(token);
  }, [token]);
};

// log out

const handleLogout = () => {
  window.localStorage.clear();
  setToken("");
  console.log("Logged Out");
};

return (
  <>
    {!token ? (
      <div className=""></div>
    ) : (
      <Home apiToken={token} handleLogout={handleLogout} />
    )}
  </>
);
