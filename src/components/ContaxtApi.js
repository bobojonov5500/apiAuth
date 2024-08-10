import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext();

const URL = "http://localhost:3000/auth/get/profile";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNtcyIsImlhdCI6MTcyMzIyNjg3NywiZXhwIjoxNzI1ODE4ODc3fQ.b1qqiEDuBUnwVVanztxieQuPAu6JQSBjeVozjJfUCJw";
export const ContextApi = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  return (
    <div>
      <Context.Provider value={{data, setData}}>{children}</Context.Provider>
    </div>
  );
};
