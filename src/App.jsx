import { useState } from "react";
import "./styles/main.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`main-content ${sidebarOpen ? "with-sidebar" : ""}`}>
        <Home />
      </main>
    </div>
  );
};

export default App;
