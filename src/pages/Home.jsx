import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gsap from "gsap";
import videoBg from "../assets/back.mp4"; // 🔁 Adjust path as needed

const Home = () => {
  const [text] = useTypewriter({
    words: ["React", "Node.js", "Express", "MongoDB"],
    loop: 0,
    delaySpeed: 2000,
  });

  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { rotateY: -20, rotateX: 10, opacity: 0 },
      {
        rotateY: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.to(circlesRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      {/* 🌟 Video Background */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌟 Main Content */}
      <div className="home-container" ref={containerRef}>
        {/* Floating shapes */}
        <div className="circle circle1" ref={(el) => (circlesRef.current[0] = el)}></div>
        <div className="circle circle2" ref={(el) => (circlesRef.current[1] = el)}></div>
        <div className="circle circle3" ref={(el) => (circlesRef.current[2] = el)}></div>

        <motion.h1 className="home-heading" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hi, I'm <span className="name">Kavinkumar</span>
        </motion.h1>

        <motion.p className="home-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          A passionate <span className="highlight">Full Stack Developer</span> skilled in{" "}
          <motion.span className="typewriter" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
            {text}
          </motion.span>
          <Cursor cursorColor="#facc15" />
        </motion.p>

        <a href="https://github.com/kavinkumar-mca-23" target="_blank" rel="noopener noreferrer" className="github-button">
          Visit My GitHub
        </a>
      </div>

      {/* 🌟 Internal CSS */}
      <style>{`
        

        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          object-fit: cover;
          z-index: -2;
        }

        .home-container {
          font-family: 'Outfit', sans-serif;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        .home-heading {
          font-size: 3rem;
          color: #facc15;
          font-weight: 800;
          margin-bottom: 10px;
          z-index: 1;
        }

        .name {
          color: #fbbf24;
        }

        .home-subtitle {
          font-size: 1.2rem;
          color: #e5e7eb;
          max-width: 700px;
          margin: 0 auto 20px;
          line-height: 1.6;
          z-index: 1;
        }

        .highlight {
          color: #facc15;
          font-weight: 700;
        }

        .typewriter {
          color: #facc15;
          font-weight: bold;
          font-family: 'Fira Code', monospace;
        }

        .github-button {
          background-color: #facc15;
          color: black;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.3s ease, background 0.3s ease;
          z-index: 1;
        }

        .github-button:hover {
          background-color: #fde047;
          transform: scale(1.05);
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
          background: #facc15;
          z-index: 0;
        }

        .circle1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 15%;
        }

        .circle2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 10%;
        }

        .circle3 {
          width: 100px;
          height: 100px;
          top: 60%;
          left: 50%;
        }

        @media (max-width: 768px) {
          .home-heading {
            font-size: 2.2rem;
          }

          .home-subtitle {
            font-size: 1rem;
          }

          .github-button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .circle1, .circle2, .circle3 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .home-heading {
            font-size: 1.8rem;
          }

          .home-subtitle {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
