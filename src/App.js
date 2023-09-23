import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import UserData from "./pages/UserData/userData";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;