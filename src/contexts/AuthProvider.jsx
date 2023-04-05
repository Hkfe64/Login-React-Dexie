import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

//React
export default function AuthProvider({ children }) {
  //Hooks
  const [user, setUser] = useState();
  //Render
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
