import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="Dashboard">
      <Header />
      <div className="UsersTrack">
        <div className="UserHeader">
          <div className="Head">Name</div>
          <div className="Head">Email</div>
          <div className="Head">Address</div>
          <div className="Head">Contact</div>
          <div className="Head">D.O.B</div>
        </div>
        <div className="Users">
          {data.map((user, key) => (
            <div className="User" key={key}>
              <div className="UserData Name">{user.name}</div>
              <div className="UserData Email">{user.email}</div>
              <div className="UserData Address">{user.address}</div>
              <div className="UserData Contact">{user.contact}</div>
              <div className="UserData Dob">{user.dob.slice(0, 10)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
