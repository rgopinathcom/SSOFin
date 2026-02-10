import { useEffect } from "react";

export default function SsoSuccess() {
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    }
  }, []);

  return <div>Signing in...</div>;
}
