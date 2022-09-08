import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser/AddUser";
import Home from "./pages/Home/Home";

function App() {
  const [users, setUsers] = useState([
    { name: "Spiderman", friend: "Ironman" },
    { name: "Ironman", friend: "Thor" },
    { name: "Hulk", friend: "Captain America" },
    { name: "Captain America", friend: "Ironman" },
    { name: "Thor", friend: "Hulk" },
  ]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} />} />
        <Route
          path="/adduser"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
