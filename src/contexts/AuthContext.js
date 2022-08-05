import { createContext, useState } from "react";
import AuthService from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  let [logged, setLogged] = useState(false);
  const authService = new AuthService();
  const signin = async (payload, callback) => {
    return authService.login(payload)
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        setLogged(true);
        callback();
      })
  };

  let signout = (callback) => {
    localStorage.removeItem('token');
    setLogged(false);
    callback();
  };

  let value = { logged, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;