import { useState } from "react";
import "./Application.css";

const Application = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [level, setLevel] = useState("");
  const [learnersAbility, setLearnersAbility] = useState("");
  const [healthCondition, setHealthCondition] = useState("");
  const [elite, setElite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicant = {
      name,
      age,
      stateOfOrigin,
      yearOfBirth,
      level,
      learnersAbility,
      healthCondition,
      elite,
    };
    fetch("http://localhost:8000/applicants", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(applicant),
    }).then(() => {
      console.log("new applicant added");
    });
  };
  return (
    <div className="application">
      <h2> ELITE ACADEMY Application Form for 2025/2026 academic session</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label> Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Age:</label>
        <input
          type="number"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label> State Of Origin</label>
        <input
          type="text"
          required
          value={stateOfOrigin}
          onChange={(e) => setStateOfOrigin(e.target.value)}
        />
        <label> Year of Birth</label>
        <input
          type="number"
          required
          value={yearOfBirth}
          onChange={(e) => setYearOfBirth(e.target.value)}
        />
        <label> Class:</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Primary 1</option>
          <option>Primary 2</option>
          <option>Primary 3</option>
          <option>Primary 4</option>
          <option>Primary 5</option>
          <option>Primary 6</option>
          <option> JSS 1</option>
          <option> JSS 2</option>
          <option> JSS 3</option>
          <option> SSS 1</option>
          <option> SSS 2</option>
          <option> SSS 3</option>
        </select>
        <label> Learners Ability:</label>
        <select
          value={learnersAbility}
          onChange={(e) => setLearnersAbility(e.target.value)}
        >
          <option> Slow learner </option>
          <option> Fast learner</option>
          <option> Gifted Learner</option>
        </select>
        <label> Health Condition</label>
        <select
          value={healthCondition}
          onChange={(e) => setHealthCondition(e.target.value)}
        >
          <option>none</option>
          <option> available</option>
        </select>
        <label>Why did you choose ELITE:</label>
        <textarea
          required
          value={elite}
          onChange={(e) => setElite(e.target.value)}
        ></textarea>
        <button> Apply </button>
      </form>
    </div>
  );
};

export default Application;
