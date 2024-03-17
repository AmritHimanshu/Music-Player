import { useEffect, useState } from "react";
import HomePage from "./components/homePage"


function Home() {

  // const CLIENT_ID = "4e6080a720e04db2ba4772e06aed0587";
  // const REDIRECT_URL = "http://localhost:3000";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";

  // const [token, setToken] = useState("");

  // const getTracks = async () => {
  //   try {
  //     const res = await fetch(`https://api.spotify.com/v1/users/${CLIENT_ID}/playlists`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {

  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (token) setToken(token);

  //   if (!token && hash) {
  //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

  //     window.location.hash = "";
  //     window.localStorage.setItem("token", token);
  //     setToken(token);
  //   }

  //   getTracks();

  // }, [])

  return (
    <>
      {/* {token ? ( */}
        <HomePage />
      {/* )
        :
        (
          <div className="h-[100vh] flex items-center justify-center">
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}>
              <div className="p-2 bg-green-700 text-white font-bold rounded-md cursor-pointer">Login to Spotify</div>
            </a>
          </div>
        )
      } */}
    </>
  )
}

export default Home