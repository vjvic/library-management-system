import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import User from "../../assets/user.svg";
import Menu from "../../assets/menu.svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <button onClick={() => toggleSidebar()}>
          <img src={Menu} alt="menu" />
        </button>
        <img src={Logo} alt="logo" />
      </div>

      <div className="user">
        <img src={User} alt="user" />
        <p>User</p>
      </div>
    </nav>
  );
};

export default Navbar;
