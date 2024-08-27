import React, { useState } from "react";
import "./Inputform.css";

function Inputform() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    emailError: "",
  });
  const [mobile, setMobile] = useState();
  const handleInputName = (event) => {
    const { name, value } = event.target;
    let error = "";
    if (name === "email" && value !== "") {
      const isValidEmail = /\S+@\S+\.\S+/.test(value);
      error = isValidEmail ? "" : "Please Enter Valid Email id";
    }

    if (name === "phone") {
      setMobile(value.replace(/\D/g, ""));
    }
    setData((prev) => {
      return { ...prev, [name]: value, emailError: error };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="input-container">
      <div className="input-wraper">
        <span>Log in</span>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            name="name"
            value={data.name}
            onChange={handleInputName}
            className="input-field"
            placeholder="Name"
            type="text"
          />
          <input
            name="email"
            value={data.email}
            onChange={handleInputName}
            className="input-field"
            placeholder="Email"
            type="text"
          />
          {data.emailError}
          <input
            name="phone"
            value={mobile}
            onChange={handleInputName}
            className="input-field"
            placeholder="Phone Number"
            type="phone"
            minLength={10}
            maxLength={10}
          />
          <input
            name="password"
            value={data.password}
            onChange={handleInputName}
            className="input-field"
            placeholder="Password"
            type="password"
          />
          <button className="input-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Inputform;
