import axios from "axios";
import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState(undefined);

  const [success, setSuccess] = useState(0); // whenever success reponse got, show alert.

  const registerData = async (e) => {
    e.preventDefault();
    console.log(name, email, contact, address, dob);

    // send data to backend
    const response = await axios.post("http://localhost:8000/user/create", {
      name: name,
      email: email,
      contact: contact,
      address: address,
      dob: dob,
    });

    response.status === 200 ? setSuccess(1) : setSuccess(-1); // set Success or Not

    setName("");
    setEmail("");
    setContact("");
    setAddress("");
    setDob(new Date());
  };

  return (
    <div className="Register">
      <Header />
      <div className="Status">
        {success === 1 ? (
          <p className="SuccessMessage">
            Your Response was Recorded Successfully!
          </p>
        ) : (
          <></>
        )}

        {success === -1 ? (
          <p className="FailureMessage">Some Error Occured!</p>
        ) : (
          <></>
        )}
      </div>
      <div className="Heading">Register</div>
      <form className="RegisterForm" method="post" onSubmit={registerData}>
        <input
          className="FormInput"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="FormInput"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="FormInput"
          type=""
          name="address"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="FormInput"
          type="text"
          name="contact"
          id="contact"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <div className="DobSelect">
          <span>Date of Birth:</span>
          <input
            className="DobInput"
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <button type="Submit" className="FormInput Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
