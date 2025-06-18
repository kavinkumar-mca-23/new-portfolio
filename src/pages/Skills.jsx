import React, { useRef, useEffect, useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiReact } from "react-icons/si";
import gsap from "gsap";
import videoBg from "../assets/skill-bg.mp4"; // ✅ Ensure correct path

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Postman", icon: <SiPostman /> },
];

export default function ClockSkills() {
  const needleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateYValue, setTranslateYValue] = useState(-165);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setTranslateYValue(screenWidth <= 500 ? -110 : -165);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalSkills = skills.length;
    const rotationPerSkill = 360 / totalSkills;

    const tl = gsap.timeline({ repeat: -1, ease: "none" });

    for (let i = 0; i <= totalSkills; i++) {
      tl.to(needleRef.current, {
        rotate: i * rotationPerSkill,
        duration: 1.5,
        ease: "power1.inOut",
        onStart: () => setActiveIndex(i % totalSkills),
      });
    }
  }, []);

  return (
    <div className="clock-wrapper">
      {/* ✅ Fixed Background Video */}
      <video className="bg-video" src={videoBg} autoPlay muted loop />

      {/* ✅ Scrollable Clock Content */}
      <div className="clock-content">
        <h2 className="skills-title">My Tech Stack Clock</h2>
        <div className="glow-background"></div>

        <div className="clock-face">
          <div className="needle" ref={needleRef}></div>
          <div className="center-pin"></div>

          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            return (
              <div
                key={index}
                className={`skill-icon ${activeIndex === index ? "active" : ""}`}
                style={{
                  transform: `rotate(${angle}deg) translate(0, ${translateYValue}px) rotate(-${angle}deg)`,
                }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap');

        .clock-wrapper {
          position: relative;
          min-height: 100vh;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .bg-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -2;
          opacity: 0.6;
          pointer-events: none;
        }

        .clock-content {
          padding: 80px 20px;
          overflow-y: auto;
          max-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }

        .skills-title {
          font-size: 2.7rem;
          margin-bottom: 40px;
          z-index: 2;
          color: #facc15;
        }

        .glow-background {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(250,204,21,0.2), transparent 60%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          z-index: 0;
          pointer-events: none;
        }

        .clock-face {
          position: relative;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          border: 6px solid #facc15;
          background-color: transparent;
          box-shadow: 0 0 40px rgba(250, 204, 21, 0.3);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          z-index: 2;
        }

        .clock-face:hover {
          transform: scale(1.05);
          box-shadow: 0 0 80px rgba(250, 204, 21, 0.6);
        }
.skill-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  font-size: 32px;
  color: #ccc;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 60px;
  text-align: center;
}


        .skill-icon span {
          margin-top: 5px;
          font-size: 0.7rem;
        }

        .skill-icon.active {
          color: #facc15;
          transform: scale(1.4) translateY(-4px);
          text-shadow: 0 0 10px #facc15;
        }

        .skill-icon:active {
          transform: scale(1.6);
        }
          .skill-icon.active {
  color: #facc15;
  transform: scale(1.2) translateY(-4px);
  text-shadow: 0 0 10px #facc15;
}


        .needle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 165px;
          background-color: #facc15;
          transform-origin: bottom center;
          transform: translate(-50%, -100%) rotate(0deg);
          border-radius: 2px;
          box-shadow: 0 0 20px #facc15;
          z-index: 3;
        }

        .center-pin {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 14px;
          background-color: #facc15;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          box-shadow: 0 0 10px #facc15;
        }

        @media (max-width: 500px) {
  .clock-face {
    width: 300px;
    height: 300px;
  }

  .needle {
    height: 85px;
  }

  .skill-icon {
    font-size: 20px;
    max-width: 40px;
  }

  .skill-icon span {
    font-size: 0.6rem;
  }

  .skills-title {
    font-size: 1.8rem;
  }

  .glow-background {
    width: 300px;
    height: 300px;
    filter: blur(60px);
  }
}

      `}</style>
    </div>
  );
}
