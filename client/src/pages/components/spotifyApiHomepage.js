import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useState } from 'react';

function Home() {

    // client_Id = 4e6080a720e04db2ba4772e06aed0587
    // clientSecret = 72555e1aecb641c6b77a0bfcb8c5a994

    // const CLIENT_ID = "4e6080a720e04db2ba4772e06aed0587";
    // const REDIRECT_URL = "http://localhost:3000";
    // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    // const RESPONSE_TYPE = "token";

    // const [token, setToken] = useState("");

    // const getSongsApi = async () => {
    //   const url = 'https://spotifyuserapiserg-osipchukv1.p.rapidapi.com/getUserSavedTracks';
    //   const options = {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/x-www-form-urlencoded',
    //       'X-RapidAPI-Key': '8c1c563b1dmshaad05381ad34973p1f60d5jsnc8d9856ecc21',
    //       'X-RapidAPI-Host': 'SpotifyUserAPIserg-osipchukV1.p.rapidapi.com'
    //     },
    //     body: new URLSearchParams({
    //       access_token: `${token}`
    //     })
    //   };

    //   console.log(token)
    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    useEffect(() => {

        // const hash = window.location.hash;
        // let token = window.localStorage.getItem("token");

        // if (token) setToken(token);

        // if (!token && hash) {
        //   token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

        //   window.location.hash = "";
        //   window.localStorage.setItem("token", token);
        //   setToken(token);
        // }

        // getSongsApi();
    }, [])

    return (
        <>

            <div className='bg-black'>
                <div className='flex'>
                    <div>

                    </div>

                    <div></div>
                </div>

                <div className='fixed bottom-0 p-5 flex flex-col items-center justify-center space-y-5 w-full border-t-[1px]'>
                    <div className='w-full'>
                        <input type="range" min="0" max="100" className='w-full' />
                    </div>
                    <div className='space-x-10'>
                        <SkipPreviousIcon style={{ cursor: 'pointer' }} />
                        <PlayArrowIcon style={{ cursor: 'pointer' }} />
                        <SkipNextIcon style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>








            {/* {!token ?
        (
          <div className='h-[100vh] w-full flex items-center justify-center'>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`} className='bg-green-500 text-black p-2 rounded-sm font-bold hover:scale-105 duration-300'>login to spotify</a>
          </div>
        )
        :
        (
          <div className='bg-black'>
            <div className='flex'>
              <div>

              </div>

              <div></div>
            </div>

            <div className='fixed bottom-0 p-5 flex flex-col items-center justify-center space-y-5 w-full border-t-[1px]'>
              <div className='w-full'>
                <input type="range" min="0" max="100" className='w-full' />
              </div>
              <div className='space-x-10'>
                <SkipPreviousIcon style={{ cursor: 'pointer' }} />
                <PlayArrowIcon style={{ cursor: 'pointer' }} />
                <SkipNextIcon style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        )
      } */}
        </>
    )
}

export default Home