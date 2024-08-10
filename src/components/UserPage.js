import React, { useContext } from "react";
import { Context } from "./ContaxtApi";

const User = () => {
  const { data, setData } = useContext(Context);

  return (
    <>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}</>
  );
};
export default User;
