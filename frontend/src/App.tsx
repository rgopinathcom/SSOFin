import { useEffect } from "react";
import { getToken, login } from "./services/authService";
import Routes from "./routes";

export default function App() {
  useEffect(() => {
    if (!getToken()) login();
  }, []);

  return <Routes />;
}
