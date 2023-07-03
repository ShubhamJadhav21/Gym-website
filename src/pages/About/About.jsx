import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container} id="/about">
      <div className={style.wrapper_video}>
        <div className={style.video_motivation}>
          <iframe
           className={style.first_video}
            width="300"
            height="350"
            src="https://www.youtube.com/embed/HnoPHqrdXQ8"
            title="YouTube video player"
            frameborder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
             gyroscope; 
             picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className={style.aboutus}>
            <h1 className={style.heading}>About Us</h1>
            <p className={style.info_about}>
              At Gym and Fitness, we believe that fitness and wellbeing are 
              the
              cornerstones of a full and vibrant life. Established in 2002, 
               we
              began our journey as a family-owned business dedicated to
              providing exceptional gym equipment at affordable prices. But, 
               we
              dreamed bigger than just being an ordinary fitness equipment
              supplier; we aspired to lead the industry.
            </p>
            <button
              className={style.btn_learnmore}
              onClick={() => alert("Clicked from about us section")}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className={style.whywe_section}>
            <div className={style.left_section}>
        <h1 className={style.heading}>Why Choose Us?</h1>
       
          <ul className={style.whywe}>
            <li>
                <h2>Consultations with Expert</h2>
              State-of-the-art facilities and equipment: Experience top-notch
              facilities and cutting-edge equipment to optimize your workouts
              and achieve your fitness goals effectively.
            </li>
            <li>
                <h2>Best workout Facilities</h2>
              Expertise and support from qualified trainers: Receive 
              personalized
              guidance from certified trainers, ensuring proper form, injury
              prevention, and consistent motivation to help you achieve your
              fitness goals.
            </li>
          </ul>
          </div>
          <iframe
            width="300"
            height="350"
            src="https://www.youtube.com/embed/wmDpHshUXHo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; 
             picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
