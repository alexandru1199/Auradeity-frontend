import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
function Home() {
  const { token, setToken } = React.useContext(LoginContext);
  const navigate = useNavigate();
  const [city, setCity] = React.useState("");
  const [cityData, setCityData] = React.useState("");
  const [loged, setLoged] = React.useState(1);
  React.useEffect(() => {
    fetch("https://ipinfo.io/json?token=4e79ce2feb26eb")
      .then((response) => response.json())
      .then((response) => {
        fetch("https://localhost:7103/api/weather/current", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ city: `${response.city}` }),
        })
          .then((response) => response.json())
          .then((response) => {
            setCityData(response);
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const onLogOut = () => {
    navigate("/login ", { replace: true });
  };
  function deleteToken() {
    localStorage.removeItem("token");
    setToken(false);
    onLogOut();
  }
  return (
    <>
      {localStorage.getItem("token") && (
        <>
          <button onClick={deleteToken}>Log Out</button>
          <p>Temperature:{cityData.temperature}&deg;C</p>
          <p>Weather:{cityData.description}</p>
        </>
      )}
      {!localStorage.getItem("token") && <p> You aren't logged in</p>}
    </>
  );
}
export default Home;
