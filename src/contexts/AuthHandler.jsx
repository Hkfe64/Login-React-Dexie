import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";
import { useEffect } from "react";
import { getCookie } from "../utils/CookieJar";

export default function AuthHandler({ children }) {
  //Hooks
  const { setUser } = useAuthContext();
  let navigate = useNavigate();

  //Render
  useEffect(() => {
    const u = getCookie("user");
    if (u) {
      setUser(u);
      if (window.location.pathname === "/") navigate("/dashboard");
    } else {
      if (window.location.pathname !== "/") navigate("/");
    }
  }, []);

  return <>{children}</>;
}
