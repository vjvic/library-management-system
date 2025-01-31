import "./sidebar.scss";
import { useState } from "react";
import { BsGear } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { PiUploadSimple } from "react-icons/pi";
import { MdOutlineClose } from "react-icons/md";

const sidebarData = [
  {
    id: 1,
    menuText: "Home",
    icon: <BiHomeAlt size={24} />,
  },
  {
    id: 2,
    menuText: "Favorites",
    icon: <FaRegHeart size={24} />,
  },
  {
    id: 3,
    menuText: "Categories",
    icon: <FaListUl size={24} />,
  },
  {
    id: 4,
    menuText: "Book Request",
    icon: <FiLayout size={24} />,
  },
  {
    id: 5,
    menuText: "Upload Book",
    icon: <PiUploadSimple size={24} />,
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="close-sidebar">
        <button onClick={() => toggleSidebar()}>
          <MdOutlineClose size={24} />
        </button>
      </div>

      {sidebarData.map((s) => (
        <div
          className={`menu-item ${activeItem === s.id ? "active" : ""}`}
          key={s.id}
          onClick={() => handleItemClick(s.id)}
        >
          <div>
            {s.icon}
            <p>{s.menuText}</p>
          </div>

          {s.id === 2 && <div className="badge">24</div>}
        </div>
      ))}

      <div className="solid" />

      <div
        className={`menu-item ${activeItem === "settings" ? "active" : ""}`}
        onClick={() => handleItemClick("settings")}
      >
        <div>
          <BsGear size={24} />
          <p>Settings</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
