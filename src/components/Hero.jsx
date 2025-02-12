// Hero.jsx
import React from "react";
import { HERO_INTRO, HERO_ROLE, HERO_DESCRIPTION, RESUME_BUTTON_TEXT, RESUME_FILE_NAME, PROFILE_PIC_ALT_TEXT } from "../constants/text";
import "../style/Hero.css";
import "../utilities/style.css";

const Hero = () => {
  const handleDownloadResume = () => {
    fetch(`./assets/${RESUME_FILE_NAME}`) // Assuming assets are in public folder
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
        a.download = RESUME_FILE_NAME; // Filename when downloaded
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); // Clean up
        window.URL.revokeObjectURL(url); // Release object URL
      })
      .catch((err) => console.error("Error downloading the file:", err));
  };

  return (
    <>
      <section className="hero-section">
        <div className="profile-info">
          <h1 className="my-name">{HERO_INTRO}</h1>
          <h3 className="my-role">{HERO_ROLE}</h3>
          <p className="my-intro">{HERO_DESCRIPTION}</p>

          <button className="btn" onClick={handleDownloadResume}>
            {RESUME_BUTTON_TEXT}
          </button>
        </div>
        <img
          className="profile-pic"
          src="./assets/prfolie_pic.webp" // assets in public
          alt={PROFILE_PIC_ALT_TEXT}
        />
      </section>
    </>
  );
};

export default Hero;
