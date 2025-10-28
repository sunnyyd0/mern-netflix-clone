import { Routes, Route, Navigate } from "react-router";

import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./Pages/WatchPage";
import SearchPage from "./Pages/SearchPage";
import SearchHistoryPage from "./Pages/SearchHistoryPage";
import NotFoundPage from "./Pages/404";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  // console.log("user:" + user);
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  if (isCheckingAuth) {
    <div className="h-screen">
      <div className="flex justify-center items-center bg-black h-full">
        <Loader className="animate-spin text-red-600 size-10" />
      </div>
    </div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to={"/"} />}
        />
        <Route
          path={"/watch/:id"}
          element={user ? <WatchPage /> : <LoginPage />}
        />
        <Route
          path={"/search"}
          element={user ? <SearchPage /> : <LoginPage />}
        />
        <Route
          path={"/history"}
          element={user ? <SearchHistoryPage /> : <LoginPage />}
        />
        <Route path={"/*"} element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
