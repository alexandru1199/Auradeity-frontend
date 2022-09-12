import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";

export const PersonContext = React.createContext();
const Vaca = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState("impostor");
  const handleClick = () => {
    setRole((role) => {
      return role === "impostor" ? "crewmate" : "impostor";
    });
    navigate("/list ", { replace: true });
  };
  return (
    <PersonContext.Provider value={role}>
      <>
        <button onClick={handleClick}>SUSbutton </button>
        <List />
      </>
    </PersonContext.Provider>
  );
};
export default Vaca;
