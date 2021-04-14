import React, { useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullName] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      address: address,
      username: username,
      phoneNumber: phoneNumber,
      fullname: fullname,
    };
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="container-sm rounded border p-3 shadow mt-5 mb-5">
          <h3 className="mt-2 text-center">Register</h3>
          <Input
            title="Fullname"
            placeholder="Masukan fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            title="Username"
            placeholder="Masukan username"
            value={fullname}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            title="Email"
            placeholder="Masukan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Phone Number"
            placeholder="Masukan phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            title="Address"
            placeholder="Masukan address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <Button onClick={handleSubmit} buttonText={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default Register;