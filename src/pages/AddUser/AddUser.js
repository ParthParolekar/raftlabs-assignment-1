import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({ users, setUsers }) => {
  const navigate = useNavigate();
  const [error, setError] = useState([false, ""]);
  const [newName, setNewName] = useState("");
  const [friend, setFriend] = useState("Spiderman");

  const addClickHandler = () => {
    setError([false, ""]);
    if (newName.length === 0) {
      setError([true, "Please enter a name"]);
      return;
    }
    for (let user of users) {
      if (user.name.toLowerCase() === newName.toLocaleLowerCase()) {
        setError([true, "Name already exists"]);
        return;
      }
    }

    setUsers([...users, { name: newName, friend }]);
    setNewName("");
  };
  return (
    <>
      <h2>Add a new user</h2>
      <button className="button" onClick={() => navigate("/")}>
        Home
      </button>
      <div className="container">
        <label>
          New User Name
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              setError([false, ""]);
              setNewName(e.target.value);
            }}
          />
          {error[0] && <h3>{error[1]}</h3>}
        </label>
        <label>
          Friend
          <select value={friend} onChange={(e) => setFriend(e.target.value)}>
            {users.map((user) => (
              <option value={user.name} key={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button className="button" onClick={addClickHandler}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddUser;
