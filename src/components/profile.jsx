import React from "react";
import { useHistory } from "react-router";

const Profile = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>프로필~~</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go to Home(useHistory)
      </button>
    </>
  );
};

export default Profile;
