import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const Home = () => {
  const [users, setUser] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark" style={{ backgroundColor: "black" }}>
            <tr style={{ color: "white" }}>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
              <th scope="col">Contact No</th>
              <th scope="col">date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td scope="row">{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
                <td>
                  <Link
                    to={`/users/edit/${user.id}`}
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>

                  <Link
                    to="#"
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/users/add" className="btn btn-outline-primary">
        Add User
      </Link>
    </div>
  );
};
export default Home;
