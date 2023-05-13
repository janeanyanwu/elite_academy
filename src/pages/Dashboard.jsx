import React from "react";
import "./Dashboard.css";
import classroom from "../images/classroom.jpeg";
import compound from "../images/compound.jpeg";
import computer from "../images/computer.jpeg";
import laboratory from "../images/laboratory.jpeg";
import library from "../images/library.jpeg";
import uniform from "../images/uniform.jpeg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-1">
        <figure>
          <img src={classroom} alt="classroom" className="image" />
          <h3> Conducive Classrooms</h3>
        </figure>
        <figure>
          <img src={compound} alt="compound" className="image" />
          <h3>Conducive Learning Environment</h3>
        </figure>
        <figure>
          <img src={computer} alt="classroom" className="image" />
          <h3> Standard Computer laboratory</h3>
        </figure>
        <figure>
          <img src={laboratory} alt="compound" className="image" />
          <h3> Standard Science laboratory</h3>
        </figure>
        <figure>
          <img src={library} alt="classroom" className="image" />
          <h3> Up to date Library</h3>
        </figure>
        <figure>
          <img src={uniform} alt="compound" className="image" />
          <h3>Standard uniform</h3>
        </figure>
      </div>
    </div>
  );
};

export default Dashboard;
