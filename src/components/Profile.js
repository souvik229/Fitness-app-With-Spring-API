import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      <img src={user.picture}></img>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add other profile fields */}
    </div>
  );
};

export default Profile;
