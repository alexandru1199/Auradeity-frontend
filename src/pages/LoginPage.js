import styles from "./login.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
export default function LoginPage() {
  const { token, setToken } = React.useContext(LoginContext);

  const navigate = useNavigate();

  const [accountExist, setAccountExist] = React.useState("");

  const onClickCreateAccountButton = () => {
    navigate("/signup", { replace: true });
  };
  const onLoginSucceful = () => {
    setToken(true);
    navigate("/home", { replace: true });
  };
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  function handleTextChange(event) {
    const { name, value } = event.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSumbit(event) {
    event.preventDefault();

    console.log("login data sent");
    fetch("https://localhost:7103/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status > 200) {
          throw new Error("Account doesnt exist");
        }
        return response.json();
      })

      .then((response) => {
        localStorage.setItem("token", response);

        onLoginSucceful();
      })
      .catch((error) => {
        console.log(error);
        setAccountExist(0);
      });
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.form_input}
          name="email"
          value={loginData.email}
          onChange={handleTextChange}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.form_input}
          name="password"
          value={loginData.password}
          onChange={handleTextChange}
        />

        {accountExist === 0 && (
          <p className={styles.accountexist}>Account doesnt exist</p>
        )}

        <span>
          <button className={styles.loginButton} onClick={handleSumbit}>
            Log In
          </button>
          <button
            className={styles.loginButton}
            onClick={onClickCreateAccountButton}
          >
            {" "}
            Create Account{" "}
          </button>
        </span>
      </form>
    </div>
  );
}
