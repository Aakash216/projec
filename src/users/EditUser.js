import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    Date: "",
  });
  const { name, email, phone, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div
      className="container"
      style={{ marginTop: "50px", alignItems: "center" }}
    >
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">EditUser</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Contact No"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "10px" }}>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="date"
              name="number"
              value={Date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            className="btn btn-primary btn-block"
            style={{ marginBottom: "10px" }}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditUser;
