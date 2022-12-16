import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<Search />} path="/search" /> */}
    </Routes>
  );
}

export default App;