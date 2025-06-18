import React from 'react';
import { FaGithub } from 'react-icons/fa';
import project1Img from '../assets/fooddel.jpg';
import project2Img from '../assets/ecommerce3.jpg';
import project3Img from '../assets/currency.jpg';
import project4Img from '../assets/bus.png';
import bgImage from '../assets/project-bg.jpg';

const projects = [
  {
    title: 'Food Delivery',
    description: 'Built with React.js and JavaScript, this food ordering website provides seamless UX with real-time updates.',
    image: project1Img,
    link: 'https://fooddeliverywebsite-2s1b.onrender.com',
  },
  {
    title: 'E-Commerce',
    description: 'Online shopping experience with responsive design and smooth navigation using React.js.',
    image: project2Img,
    link: 'https://ecom-pegx.onrender.com/',
  },
  {
    title: 'Currency Converter',
    description: 'Convert currencies in real time using JavaScript and REST APIs with a clean, responsive interface.',
    image: project3Img,
    link: 'https://vishnu-mca2023.github.io/Currency/',
  },
  {
    title: 'College Transport System',
    description: 'MERN stack-based system for bus booking, real-time tracking, and schedule management.',
    image: project4Img,
    link: 'https://transportation-managementsystem-frontnend.onrender.com',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="projects-container">
        <h2 className="projects-heading">PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Run the Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

        .projects-section {
          padding: 40px 0;
          background-size: cover;
          background-position: center;
          background-color: #111;
          color: #fff;
          min-height: 100vh;
          font-family: 'Orbitron', sans-serif;
          padding-left: 250px;
        }

        .projects-container {
          width: 90%;
          margin: auto;
        }

        .projects-heading {
          text-align: center;
          color: #00c6ff;
          margin-bottom: 40px;
        }

        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .project-card {
          background: #222;
          border-radius: 12px;
          width: 300px;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.5);
        }

        .project-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .project-body {
          padding: 20px;
        }

        .project-title {
          color: #00ffe5;
          margin-bottom: 10px;
        }

        .project-description {
          font-size: 14px;
          color: #ccc;
          margin-bottom: 15px;
        }

        .project-link {
          color: #00c6ff;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        /* Responsive Tablet */
        @media (max-width: 1024px) {
          .projects-section {
            padding-left: 0;
          }
        }

        /* Responsive Mobile */
        @media (max-width: 768px) {
          .project-card {
            width: 90%;
          }

          .projects-section {
            padding: 20px 10px;
          }

          .project-description {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .project-title {
            font-size: 18px;
          }

          .project-description {
            font-size: 12px;
          }

          .project-link {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
