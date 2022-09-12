import styles from "./login.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [signinData, setSigninData] = React.useState({
    email: "",
    password: "",
  });

  function handleTextChange(event) {
    const { name, value } = event.target;
    setSigninData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  async function handleSumbit(event) {
    event.preventDefault();

    // Send data to the backend via POST
    await fetch("https://localhost:7103/api/auth/signup", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signinData),
      // body data type must match "Content-Type" header
    }).catch((error) => {
     console.log(error)
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
          value={signinData.email}
          onChange={handleTextChange}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.form_input}
          name="password"
          value={signinData.password}
          onChange={handleTextChange}
        />

        <span>
          <button className={styles.loginButton} onClick={handleSumbit}>
            Sign Up
          </button>
        </span>
      </form>
    </div>
  );
}
