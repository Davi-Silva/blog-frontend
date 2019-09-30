import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://davi-silva-blog-backend.herokuapp.com/user")
      // fetch("http://localhost:5000/user")
      .then(res => res.json())
      .then(res => {
        console.log("res:", res);
        setUser(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
