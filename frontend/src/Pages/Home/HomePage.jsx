import React from "react";
import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";

const HomePage = () => {
  let user = false;
  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
