import logo from "../images/logo.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="school-logo" />
      <h1>ELITE ACADEMY</h1>
      <h3>Motto: Education is the best legacy </h3>
      <div>
        {" "}
        <p> Founded in 2024</p>
      </div>
    </nav>
  );
};

export default NavBar;
