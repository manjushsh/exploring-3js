import appLogo from "../../images/3d.png";
import "./App.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar-nav">
        <ul className="navbar">
          <li>
            <span>
              <div className="logo">
                <img src={appLogo} alt="logo" />
                <span className="logo-text vh-centered">ThreeD</span>
              </div>
            </span>
          </li>
          <li>{/* <a href="#second">Second</a> */}</li>
          <li>{/* <a href="#third">Third</a> */}</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
