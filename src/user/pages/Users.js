import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: "bruce generator",
      image:
        "https://cdn2.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/800px-Ash_Pikachu.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
