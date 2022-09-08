import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser/AddUser";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
