import { motion } from "framer-motion";
import profileImage from "../assets/pic-kavin.png"; // Make sure this image exists
import resumePDF from "../assets/KAVINKUMAR_resume.pdf"; // Rename if needed

const About = () => (
  <>
    {/* Thunder flash effect */}
    <div className="thunder-flash"></div>

    <div className="about-container">
      {/* Background image blending effect */}
      <div className="about-image">
        <img src={profileImage} alt="Background" className="background-img" />
      </div>

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Motivated Full Stack Developer skilled in JavaScript, React, Node.js, Express.js, and MongoDB.
      </motion.p>

      <div className="about-content">
        <div className="card-container">
          {[
            { icon: "📍", label: "Location", value: "Coimbatore" },
            {
              icon: "📧",
              label: "Email",
              value: "kavinkumar01516@gmail.com",
              link: "mailto:kavinkumar01516@gmail.com",
            },
            {
              icon: "🔗",
              label: "GitHub",
              value: "github.com/kavinkumar",
              link: "https://github.com/kavinkumar",
            },
            {
              icon: "🔗",
              label: "LinkedIn",
              value: "linkedin.com/in/kavinkumar1516",
              link: "https://www.linkedin.com/in/kavinkumar1516",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}:</span>
              {item.link ? (
                <a
                  href={item.link}
                  className="value link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              ) : (
                <span className="value">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Resume Download Button */}
        <a
          href={resumePDF}
          download="Kavinkumar-Resume.pdf"
          className="resume-button"
        >
          📄 Download Resume
        </a>
      </div>
    </div>

    {/* Internal styles */}
    <style>{`
      // .thunder-flash {
      //   position: fixed;
      //   top: 0;
      //   left: 0;
      //   width: 100vw;
      //   height: 100vh;
      //   pointer-events: none;
      //   z-index: 9999;
      //   background: white;
      //   opacity: 0;
      //   animation: thunderFlash 10s infinite;
      // }

      // @keyframes thunderFlash {
      //   0%, 97%, 100% { opacity: 0; }
      //   98% { opacity: 0.8; }
      //   98.5% { opacity: 0; }
      //   99% { opacity: 0.6; }
      //   99.5% { opacity: 0; }
      // }

      .about-container {
        position: relative;
        min-height: 100vh;
        background-color: #111827;
        color: white;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
      }

      .about-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.3;
      }

      .background-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%) brightness(0.3);
      }

      .about-title {
        font-size: 32px;
        color: #facc15;
        font-weight: 700;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;
      }

      .about-desc {
        font-size: 18px;
        color: #ccc;
        max-width: 600px;
        text-align: center;
        margin-bottom: 30px;
        position: relative;
        z-index: 1;
      }

      .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
        max-width: 1100px;
        z-index: 1;
      }

      .card-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 500px;
      }

      .info-card {
        background: rgba(31, 41, 55, 0.7);
        border: 1px solid #2d3748;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        backdrop-filter: blur(4px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.15s ease-in-out, background 0.3s ease;
      }

      .info-card:hover {
        background: rgba(55, 65, 81, 0.8);
        transform: scale(1.07);
      }

      .icon {
        font-size: 20px;
      }

      .label {
        font-weight: 600;
        color: #facc15;
      }

      .value {
        color: #e5e7eb;
        margin-left: auto;
      }

      .link {
        color: #93c5fd;
        text-decoration: none;
      }

      .link:hover {
        text-decoration: underline;
      }

      .resume-button {
        display: inline-block;
        margin-top: 10px;
        background: #facc15;
        color: #000;
        font-weight: bold;
        padding: 12px 24px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 0 10px #facc15;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .resume-button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px #facc15;
      }

      @media (max-width: 768px) {
        .about-container {
          padding: 30px 16px;
        }

        .about-title {
          font-size: 28px;
        }

        .about-desc {
          font-size: 16px;
        }

        .info-card {
          flex-direction: column;
          align-items: flex-start;
        }

        .value {
          margin-left: 0;
          margin-top: 4px;
        }

        .resume-button {
          font-size: 14px;
          padding: 10px 20px;
        }
      }

      @media (max-width: 480px) {
        .about-container {
          padding: 20px 12px;
        }

        .info-card {
          padding: 12px 14px;
        }
      }
    `}</style>
  </>
);

export default About;
