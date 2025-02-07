// Hero.jsx
import React from "react";
import "../style/Hero.css";
import "../utilities/style.css";

const Hero = () => {
  const handleDownloadResume = () => {
    fetch("/assets/Nandan_Resume.pdf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Nandan_Resume.pdf"; // Filename when downloaded
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => console.error("Error downloading the file:", err));
  };

  return (
    <>
      <section className="hero-section" id="about">
        <div className="profile-info">
          <h1 className="my-name">Hi, I’m Nandan 👋</h1>
          <p className="my-intro">
            A passionate developer skilled in creating dynamic
            <span className="highlight"> Web</span> and
            <span className="highlight"> Mobile Applications</span> using
            <span className="highlight"> React</span>,
            <span className="highlight"> Node.js</span>, and
            <span className="highlight"> Flutter</span>. I’m also an{" "}
            <span className="highlight">AI/ML</span> enthusiast, constantly
            exploring innovative solutions to solve real-world problems.
          </p>

          <button className="btn" onClick={handleDownloadResume}>
            Download Resume
          </button>
        </div>
        <img
          className="profile-pic"
          src="src/assets/prfolie_pic.webp"
          alt="profile pic"
        />
      </section>
    </>
  );
};

export default Hero;
