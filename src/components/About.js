import React from "react";
import SolutionStep from "./SolutionStep";
import "../styles/About.css";
import counselors from "../asset/counsel2.jpg"

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={counselors} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to the counseling platform, your trusted partner for accessible and
          personalized counseling. Our expert counselors offer online consultations
          and specialized services, prioritizing your  mental well-being. Join us on
          this journey towards a healthier and stable you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist with ease on the couseling platform. Peer counselors prioritize your mental welfare, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced counselors and peers are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;
