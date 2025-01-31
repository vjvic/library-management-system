import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import { FiUser } from "react-icons/fi";

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
        <FiUser size={24} className="user-icon" />
        <p>User</p>
      </div>
    </nav>
  );
};

export default Navbar;
