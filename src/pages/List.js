import React from "react";
import { PersonContext } from "./Context";
const List = () => {
  const valoare = React.useContext(PersonContext);

  return (
    <>
      <p>{valoare}</p>
      <p>TARE</p>
    </>
  );
};

export default List;
