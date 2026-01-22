import React, { useState } from "react";
import ReactPlayer from "react-player";

function UserListPlayer() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sanjana" },
    { id: 2, name: "Vasundhara" },
    { id: 3, name: "yashaswini" },
    { id: 4, name: "Geetheka" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>User List Player</h1>

     
      <ReactPlayer
        url="https://www.youtube.com/watch?v=hMxQt375jeg"
        controls
        width="100%"
        height="360px"
      />

      <h2>Users</h2>

      <input
        type="text"
        placeholder="Search user by name"
        onChange={handleSearch}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserListPlayer;
