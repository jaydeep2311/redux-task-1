import React from "react";

const Register = () => {
  const initial = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  };
  const [employee, setemployee] = React.useState(initial);
  const handleChange = (e) => {
    var { name, value } = e.target;
    var newobj = { ...employee, [name]: value };
    setemployee(newobj);
  };
  const handlesubmit = () => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="mobile"
        placeholder="mobile"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={handlesubmit}>
        Submit
      </button>
    </div>
  );
};

export default Register;
