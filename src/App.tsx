import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/private"
            element={<PrivateRoute component={<HomeScreen />} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
