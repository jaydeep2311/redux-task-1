import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setlogin, Auth } from "./Redux/action";

const Login = () => {
  const [User, setUser] = React.useState({
    username: "",
    password: "",
  });
  const curUser = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const handleuser = (e) => {
    const { name, value } = e.target;
    const newobj = { ...User, [name]: value };
    setUser(newobj);
  };
  const handleuserclick = () => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error !== true) {
          if (isAuth !== true) {
            dispatch(Auth(true));
            dispatch(
              setlogin({
                token: res.token,
                Name: User.username,
              })
            );
          } else {
            alert("wrong credentials");
          }
        }
      });
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        onChange={(e) => handleuser(e)}
        placeholder="username"
      />
      <input
        type="text"
        name="password"
        onChange={(e) => handleuser(e)}
        placeholder="password"
      />
      <button type="submit" onClick={handleuserclick}>
        Submit
      </button>
    </div>
  );
};

export default Login;
