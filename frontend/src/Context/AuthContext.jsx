import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("current_user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("spotify_users") || "[]");
    const user = users.find((u) => u.email === email);

    if (!user) {
      return { success: false, message: "Email does not exist." };
    }

    if (user.password !== password) {
      return { success: false, message: "Incorrect password." };
    }

    setCurrentUser(user);
    localStorage.setItem("current_user", JSON.stringify(user));
    return { success: true };
  };

  const signup = (email, password, name) => {
    const users = JSON.parse(localStorage.getItem("spotify_users") || "[]");
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return {
        success: false,
        message: "User already exists with this email.",
      };
    }

    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem("spotify_users", JSON.stringify(users));

    // Auto login after signup
    setCurrentUser(newUser);
    localStorage.setItem("current_user", JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("current_user");
  };

  const contextValue = { currentUser, login, signup, logout };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
