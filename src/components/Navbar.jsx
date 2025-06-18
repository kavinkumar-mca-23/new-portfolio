import { Link, useLocation } from "react-router-dom";
import myPic from "../assets/my-pic.jpg";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`vertical-navbar ${isOpen ? "show" : ""}`}>
        <div className="profile-section">
          <img src={myPic} alt="Profile" className="profile-pic" />
          <div className="navbar-brand">Kavin</div>
        </div>

        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/education"
            className={`nav-link ${location.pathname === "/education" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Education
          </Link>

          {/* Projects dropdown */}
          <div className="dropdown">
            <Link
              to="/projects"
              className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <div className="dropdown-content">
              <Link
                to="/task"
                className="dropdown-item"
                onClick={() => setIsOpen(false)}
              >
                Tasks
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

        .hamburger {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 30px;
          height: 25px;
          z-index: 1100;
          display: none;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .bar {
          width: 100%;
          height: 4px;
          background: #facc15;
          border-radius: 2px;
          transition: all 0.4s ease;
        }

        .bar.open:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }
        .bar.open:nth-child(2) {
          opacity: 0;
        }
        .bar.open:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        .vertical-navbar {
          position: fixed;
          top: 20px;
          left: 20px;
          height: 75vh;
          width: 230px;
          border-radius: 500px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
          font-family: 'Orbitron', sans-serif;
          z-index: 1000;
          transition: transform 0.4s ease, opacity 0.5s ease;
        }

        .vertical-navbar:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3);
        }

        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .profile-pic {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 100%;
          border: 4px solid #facc15;
          box-shadow: 0 0 15px #facc15, 0 0 25px rgba(255, 255, 255, 0.2);
          transition: transform 1.4s ease;
        }

        .profile-pic:hover {
          transform: rotateY(360deg);
        }

        .navbar-brand {
          font-size: 20px;
          font-weight: bold;
          color: #facc15;
          text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.4);
        }

        .navbar-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #facc15;
          animation: shake 0.3s ease-in-out;
          text-shadow: 0 0 10px #facc15;
        }

        .nav-link.active {
          color: #facc15;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 8px;
          background-color: #facc15;
          border-radius: 50%;
        }

        /* Dropdown */
        .dropdown {
          position: relative;
          width: 100%;
          text-align: center;
        }

        .dropdown-content {
          display: none;
          flex-direction: column;
          background-color: rgba(17, 24, 39, 0.95);
          padding: 10px;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          border-radius: 8px;
          z-index: 1001;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .dropdown:hover .dropdown-content {
          display: flex;
        }

        .dropdown-item {
          color: #facc15;
          padding: 6px 0;
          font-size: 14px;
          transition: background 0.3s ease;
          text-decoration: none;
        }

        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }

        /* Responsive Mobile */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .vertical-navbar {
            top: 60px;
            left: 0;
            width: 100%;
            height: auto;
            flex-direction: column;
            padding: 20px;
            transform: translateY(-200%);
            opacity: 0;
            border-radius: 0;
          }

          .vertical-navbar.show {
            transform: translateY(0);
            opacity: 1;
          }

          .profile-section {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
          }

          .profile-pic {
            width: 50px;
            height: 50px;
          }

          .navbar-links {
            flex-direction: column;
            gap: 15px;
          }

          .nav-link {
            font-size: 14px;
          }

          .dropdown-content {
            position: relative;
            background: transparent;
            box-shadow: none;
            padding: 0;
          }

          .dropdown-item {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
