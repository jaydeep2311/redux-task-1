import React from "react";

const Employee = () => {
  const [employees, setemployees] = React.useState([]);
  React.useEffect(() => {
    fetch(" http://localhost:3001/employees")
      .then((res) => res.json())
      .then((res) => setemployees([...res]));
  }, []);
  return (
    <div>
      {employees.map((el) => {
        return (
          <>
            <div>{el.name}</div>
            <div>{el.age}</div>
            <div>{el.salary}</div>
            <div>{el.dept}</div>
          </>
        );
      })}
    </div>
  );
};

export default Employee;
