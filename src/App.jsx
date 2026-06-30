import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <CursorGlow />
      <Home />
    </>
  );
}

export default App;