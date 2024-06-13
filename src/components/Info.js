import React from "react";
import { faUserTie, faPersonDrowning, faCircleQuestion,faVideo } from "@fortawesome/free-solid-svg-icons";
import "../styles/Info.css";
import InformationCard from "./InformationCard";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring counseling to your convenience, offering a comprehensive
          range of on-demand counselig services tailored to your needs. Our
          platform allows you to connect with experienced online peer counselors who
          provide expert mental advice, issue online counseling, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="EMERGENCY"
          description="our service is designed to be your reliable support
            in critical situations. Whether it's a sudden depression, misfortune, or
            any mental concern that requires immediate attention, our team of
            dedicated peer counnselors is available 24/7 to provide
            prompt and efficient counsel."
             icon={faPersonDrowning}
        />

        <InformationCard
          title="Meeting Professionals"
          description="Our team of experienced counselors  use
            professional methods to assess your mental health and
            design personalized counseling plans. From comprehensive interviews
            to advanced interventions, we are committed to helping you maintain
            a healthy mental state and lead a fulfilling life."
             icon={faUserTie} 
        />

        <InformationCard
          title="Anonymous Service"
          description="Smile with confidence as our counseling services cater to all your
            secret needs. Our services provide a wide range of
            platform, from which you can share your problem anonymously and nobody judging you
            ."
             icon={faCircleQuestion}
        />

        <InformationCard
          title="videos"
          description="our platform seek to provide motivational
          videos which can help boast the confidence and lighten up their day.
          we intend having impact on people through inspirational videos
            ."
             icon={faVideo} 
        />
      </div>
    </div>
  );
}

export default Info;
