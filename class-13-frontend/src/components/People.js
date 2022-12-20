import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function People() {
  const [name, setName] = useState("daniel");
  const inputHandler = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("%c I run on every render", "background:#ccc, colour:red");
  });

  useEffect(() => {
    console.log("i run on name change");
  }, [name]);

  useEffect(() => {
    console.log("only in intial render");
  }, []);
  return (
    <>
      <h1>{name}</h1>
      <input
        tupe="text"
        placeholder="Enter somthing"
        onChange={inputHandler}
      ></input>
    </>
  );
}

export default People;
