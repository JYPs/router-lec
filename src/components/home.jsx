import React from "react";
import { useHistory } from "react-router";

const Home = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>홈홈</h1>
      <button onClick={() => history.push("/profile")}>
        Go to profile(useHistory)
      </button>
    </>
  );
};

export default Home;
