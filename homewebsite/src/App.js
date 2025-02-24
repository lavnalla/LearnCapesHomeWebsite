import React, { useEffect, useState } from 'react';
import logo from './learncapeslogo.webp';
import './App.css';
import { useTranslation } from 'react-i18next';
import { FaHome, FaUserGraduate, FaTools, FaBars } from "react-icons/fa";
import i18n from './i18n';

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
  const { t } = useTranslation();
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const video = document.getElementById('intro-video');
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div className="App">
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
        <button onClick={() => changeLanguage('te')}>తెలుగు</button>
      </div>
      <header className="App-header">
        <div className="App-header-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-header-title">
          <h1>{t('welcome')}</h1>
          <p>{t('description')}</p>
        </div>
        <div className="App-header-image">
          <img src="/LearnCapesHomeWebsite/devops.png" alt="devops"/>
        </div>
      </header>
      <div className="App-content">
        <span className="sidebar"><Sidebar /></span>
        <main className="App-main">
          <section className="about" dangerouslySetInnerHTML={{ __html: t('about_description') }} />
        </main>
        <div className="App-right-sidebar">
          <section className="contact">
            <h2>{t('contact_us')}</h2>
            <p>{t('email')}</p>
          </section>
          {!isVideoVisible && (
            <div className="App-header-video">
              <video id="intro-video" width="100%" height="auto" controls muted autoplay>
                <source src="/LearnCapesHomeWebsite/Intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
      {isVideoVisible && (
        <div className="video-popup">
          <button className="minimize-button" onClick={() => setIsVideoVisible(false)}>✖</button>
          <video id="intro-video" width="100%" height="auto" controls muted autoPlay>
            <source src="/LearnCapesHomeWebsite/Intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <footer>
        <p>&copy; 2023 LearnCapes Consulting Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;