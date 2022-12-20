import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import People from "./People";

function FormforAdding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [people, setPeople] = useState([]);

  const addPerson = async (e) => {
    e.preventDefault();
    const newPersonData = {
      name: name,
      email: email,
      country: country,
      number: number,
    };
    setPeople([...people, newPersonData]);
    const results = await axios.post(
      `http://localhost:3001/person`,
      newPersonData
    );
    console.log(results.data);
  };
  useEffect(() => {
    console.log("i run on name change");
  }, []);
  return (
    <>
      <h1>Addeing Person Form</h1>
      <Form on onSubmit={addPerson}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your Number"
            name="phone number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      {people.map((person, index) => {
        return (
          <p key={index}>
            Name : {person.name}
            <br />
            Email : {person.email}
          </p>
        );
      })}
    </>
  );
}

export default FormforAdding;
