import React from "react";
import { FaGithub } from "react-icons/fa";

const tasks = [
  {
    title: "ToDo App",
    description: "Simple task management app built with React",
    url: "https://animated-parfait-a5b42e.netlify.app/",
    code: "https://github.com/kavinkumar-mca-23/Todo-App",
    image: "https://cdn-icons-png.flaticon.com/512/8296/8296270.png",
  },
  {
    title: "Login Navigation",
    description: "Page navigation with login functionality",
    url: "https://candid-seahorse-cb960a.netlify.app/",
    code: "https://github.com/kavinkumar-mca-23/Nav-pages-Login",
    image: "https://cdn-icons-png.flaticon.com/512/5956/5956828.png",
  },
];

const Task = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task Projects</h2>
      <div className="task-grid">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <img src={task.image} alt={task.title} style={styles.image} />
            <h3 style={styles.title}>{task.title}</h3>
            <p style={styles.desc}>{task.description}</p>
            <div style={styles.linkGroup}>
              <a
                href={task.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.visitBtn}
              >
                View Project
              </a>
              <a
                href={task.code}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .task-grid {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .task-card {
          background: #1e293b;
          border-radius: 12px;
          padding: 20px;
          max-width: 220px;
          width: 100%;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          transform: translateX(10px); 
        }

        .task-card::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 14px;
          background: radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          z-index: 0;
        }

        .task-card:hover::before {
          opacity: 1;
          animation: blink 1.2s infinite alternate;
        }

        .task-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(250,204,21,0.4);
        }

        @keyframes blink {
          0% { background-color: rgba(250,204,21,0.15); }
          100% { background-color: rgba(250,204,21,0.05); }
        }

        @media (max-width: 768px) {
          .task-grid {
            flex-direction: column;
            align-items: center;
          }

          .task-card {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    minHeight: "100vh",
    background: "#0f172a",
    color: "#facc15",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "15px",
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: "18px",
    marginBottom: "10px",
    position: "relative",
    zIndex: 1,
  },
  desc: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "15px",
    position: "relative",
    zIndex: 1,
  },
  linkGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  visitBtn: {
    backgroundColor: "#facc15",
    color: "#000",
    padding: "8px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
  iconLink: {
    color: "#facc15",
    textDecoration: "none",
    transition: "transform 0.2s ease",
  },
};

export default Task;
