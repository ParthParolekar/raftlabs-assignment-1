import React, { useState } from "react";

const Home = ({ users }) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [path, setPath] = useState([]);

  const clickHandler = (n1, n2, found) => {
    //Check if name2 and name 1 are friends
    for (let user of users) {
      if (
        user.name.toLowerCase() === name2 &&
        user.friend.toLowerCase() === name1
      ) {
        found.push(user.name);
        console.log(found);
        setPath(found);
        return;
      }
    }
    let currUserObj = users.find(
      (user) => user.name.toLowerCase() === n1.toLowerCase()
    );

    if (found.includes(currUserObj.friend)) {
      found.push("not found");
      console.log(found);
      setPath(found);
      return;
    }
    if (currUserObj.friend.toLowerCase() === name2.toLowerCase()) {
      found.push(currUserObj.friend);
      console.log(found);
      setPath(found);
      return;
    } else {
      found.push(currUserObj.friend);
      clickHandler(currUserObj.friend, name2, found);
      console.log(found);
      setPath(found);
    }
  };
  return (
    <>
      <h1>Social Network</h1>
      <h4>See how connected you are with other people</h4>
      <div className={"container"}>
        <label>
          Name 1
          <select onChange={(e) => setName1(e.target.value)}>
            <option defaultValue key="select name">
              select name
            </option>
            {users.map((user) => (
              <option value={user.name} key={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Name 2
          <select onChange={(e) => setName2(e.target.value)}>
            <option defaultValue key="select name">
              Select Name
            </option>
            {users.map((user) => (
              <option value={user.name} key={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button
          className={"button"}
          onClick={() => clickHandler(name1, name2, [name1])}
        >
          Check
        </button>
        {path[path.length - 1] !== "not found" && path.length !== 0 && (
          <h1>The relationship</h1>
        )}
        {path[path.length - 1] !== "not found" && <h3>{path.join(" > ")}</h3>}
        {path[path.length - 1] === "not found" && <h3>Not found</h3>}
      </div>
    </>
  );
};

export default Home;
