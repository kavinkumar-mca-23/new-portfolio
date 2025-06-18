import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactVideo from "../assets/contect-bg.mp4";

export default function Contact() {
  const form = useRef();
  const [toast, setToast] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1obhhzs",
        "template_zr8mk07",
        form.current,
        "tkv4dt6uRshnI7nRU"
      )
      .then(
        () => {
          showToast("✅ Message sent successfully!", "success");
          form.current.reset();
        },
        (error) => {
          showToast("❌ Failed to send message. Please try again.", "error");
          console.error(error.text);
        }
      );
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  return (
    <div style={styles.container}>
      {/* 🔹 Fixed Background Video */}
      <video
        src={contactVideo}
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
      />

      <h2 style={styles.title}>Contact Me</h2>

      {/* ✅ Toast Notification */}
      {toast.message && (
        <div
          style={{
            ...styles.toast,
            backgroundColor: toast.type === "success" ? "#22c55e" : "#ef4444",
          }}
        >
          {toast.message}
        </div>
      )}

      {/* 🔸 Scrollable Form Wrapper */}
      <div style={styles.scrollWrapper}>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={styles.input}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    color: "#facc15",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Outfit', sans-serif",
    overflow: "hidden",
    zIndex: 1,
    padding: "20px",
  },
  video: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
    zIndex: -1,
    opacity: 0.6,
    pointerEvents: "none",
  },
  title: {
    position: "absolute",
    top: "30px",
    fontSize: "2.5rem",
    color: "#facc15",
    zIndex: 2,
  },
  scrollWrapper: {
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "20px",
    backdropFilter: "blur(10px)",
    
    borderRadius: "12px",
    zIndex: 2,
    width: "100%",
    maxWidth: "500px",
    marginTop: "60px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "none",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #facc15",
    backgroundColor: "transparent",
    color: "#fff",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #facc15",
    backgroundColor: "transparent",
    color: "#fff",
    outline: "none",
    minHeight: "120px",
  },
  button: {
    padding: "14px",
    backgroundColor: "#facc15",
    color: "#000",
    fontWeight: "bold",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 25px",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "30px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    zIndex: 999,
    animation: "fadeIn 0.5s ease-in-out",
  },
};
