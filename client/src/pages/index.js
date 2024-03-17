import HomePage from "./components/homePage"


function Home() {

  const CLIENT_ID = "4e6080a720e04db2ba4772e06aed0587";
  const REDIRECT_URL = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <>
      <HomePage/>
    </>
  )
}

export default Home