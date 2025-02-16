import logo from './learncapeslogo.webp';
import './App.css';
import { useState } from "react";
import { FaHome, FaUserGraduate, FaTools, FaBars } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 transition-all ${isOpen ? "w-64" : "w-20"}`}>
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-5">
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <FaHome size={20} />
            {isOpen && <span>Dashboard</span>}
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <FaUserGraduate size={20} />
            {isOpen && <span>Training</span>}
            <ul className="pl-8">
              <li>Agile/CSM</li>
              <li>Java Fullstack</li>
              <li>Git</li>
              <li>Devops</li>
            </ul>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            <FaTools size={20} />
            {isOpen && <span>Tools</span>}
            <ul className="pl-8">
              <li>Jira/CSM</li>
              <li>Github</li>
              <li>GCP CI/CD</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-header-title">
          <h1>Welcome to LearnCapes Consulting Inc.</h1>
          <p>Providing real-world training with industry-standard tools.</p>
        </div>
        <div className="App-header-contact">
          <section className="contact">
            <h2>Contact Us</h2>
            <p>Email: lavnalla23@gmail.com</p>
          </section>
        </div>
      </header>
      <div className="App-content">
        <Sidebar />
        <main className="App-main">
          <section className="about">
            <h2>About Us</h2>
            <p>
              At LearnCapes Consulting Inc., we bridge the gap between theory and real-world experience by providing hands-on training in a fully simulated office environment.
            </p>
            <ul>
              <li>Our trainees work with industry-standard tools such as JIRA, GitHub, Google Cloud Platform (GCP) CI/CD, and Visual Studio Code, just like in top-tier companies.</li>
              <li>We follow best practices from Agile methodologies, including Certified Scrum Master (CSM) frameworks, ensuring that participants gain practical experience in project management, collaboration, and DevOps workflows.</li>
              <li>By mirroring real corporate settings, we empower professionals to transition seamlessly into high-performance teams.</li>
            </ul>
            <p className="highlight">
              🚀 Learn by doing, not just by watching!
            </p>
          </section>
          
        </main>
      </div>
      <footer>
        <p>&copy; 2023 LearnCapes Consulting Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;