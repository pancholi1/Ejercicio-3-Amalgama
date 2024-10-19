import { createContext, ReactNode, useState } from "react";
import axios, { AxiosError } from "axios";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

interface AuthContextProps {
  loginState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginState, setLoginState] = useState<AuthState>(initialState);

  const login = async (email: string, password: string) => {
    console.log(
      new URLSearchParams({
        email: email,
        password: password,
      })
    );
    try {
      const response = await axios.post(
        "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login",
        new URLSearchParams({
          email: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      setLoginState({
        error: null,
        isAuthenticated: true,
        token: response.data.token,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            setLoginState({
              error: "Invalid email or password",
              isAuthenticated: false,
              token: null,
            });
          } else {
            setLoginState({
              error: "server error",
              isAuthenticated: false,
              token: null,
            });
          }
        }
      }
    }
  };

  const logout = () => {
    setLoginState(initialState);
  };

  return (
    <AuthContext.Provider value={{ loginState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
