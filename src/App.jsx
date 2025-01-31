import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/main.scss";

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
        <h3>Hello</h3>
        <p>Welcome to the application. This is your main content area.</p>
      </main>
    </div>
  );
};

export default App;
