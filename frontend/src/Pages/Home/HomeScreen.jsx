import React from "react";
import { useAuthStore } from "../../store/authUser";

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <button onClick={() => logout()}>Home Screen</button>
    </div>
  );
};

export default HomeScreen;
