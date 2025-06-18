import { motion } from "framer-motion";

const Education = () => (
  <>
    <div className="education-container">
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        <div className="card-wrapper">
          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="edu-degree">MCA - RVS College, Coimbatore</h3>
            <p className="edu-detail">2023 - 2025 | CGPA: 79%</p>
          </motion.div>

          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="edu-degree">BCA - SVM College, Krishnagiri</h3>
            <p className="edu-detail">2020 - 2023 | CGPA: 7.5</p>
          </motion.div>

          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="edu-degree">HSC - GHSS Madarahalli, Krishnagiri</h3>
            <p className="edu-detail">2018 - 2020 | CGPA: 6.5</p>
          </motion.div>
        </div>
      </div>
    </div>

    <style>{`
      .education-container {
        background-color: #b87c68; /* Color from uploaded image */
        color: white;
        padding: 40px 20px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .education-title {
        font-size: 32px;
        color: #ffe0d5;
        font-weight: bold;
        margin-bottom: 30px;
        text-align: center;
      }

      .timeline-wrapper {
        position: relative;
        width: 100%;
        max-width: 600px;
        padding-left: 30px;
      }

      .timeline-line {
        position: absolute;
        top: 0;
        left: 12px;
        width: 4px;
        height: 100%;
        background-color: #fff0ea;
      }

      .card-wrapper {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      .edu-card {
        position: relative;
        background: rgba(255, 255, 255, 0.1); /* light glass */
        border-radius: 16px;
        padding: 20px 20px 20px 40px;
        border-left: 6px solid #ffe0d5;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      }

      .edu-card::before {
        content: "";
        position: absolute;
        top: 20px;
        left: -18px;
        width: 16px;
        height: 16px;
        background-color: #ffe0d5;
        border-radius: 50%;
        border: 2px solid #fff;
      }

      .edu-degree {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
        color: #fff;
      }

      .edu-detail {
        font-size: 16px;
        color: #f0f0f0;
      }

      @media (max-width: 768px) {
        .education-title {
          font-size: 26px;
        }

        .edu-degree {
          font-size: 18px;
        }

        .edu-detail {
          font-size: 14px;
        }

        .timeline-wrapper {
          padding-left: 20px;
        }

        .timeline-line {
          left: 8px;
        }

        .edu-card::before {
          left: -22px;
        }
      }

      @media (max-width: 480px) {
        .education-title {
          font-size: 22px;
        }

        .edu-card {
          padding: 16px 16px 16px 36px;
        }

        .edu-degree {
          font-size: 16px;
        }

        .edu-detail {
          font-size: 13px;
        }
      }
    `}</style>
  </>
);

export default Education;
