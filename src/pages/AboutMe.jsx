import React from 'react';
import '../pages/AboutMe.css';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutMe = () => {
  return (
    <div className="aboutme-description">
      <ScrollAnimation />
      <div className="aboutme-headcontent">
        <h1>Mingkun Li</h1>

        <section className="aboutme-selfintro scroll-animate">
          <div className="aboutme-flex-row">
            <div className="aboutme-photo"></div>

            <div className="aboutme-text">
              <h2>About Me</h2>
              <p>
                I'm a UX/UI designer with a background in interaction design, passionate about creating thoughtful, innovative, and user-first digital experiences. Whether it's mapping user journeys, conducting usability tests, or designing sleek and accessible interfaces, I'm dedicated to turning ideas into intuitive interactions.
              </p>
              <p>
                Curious by nature, I've always enjoyed coming up with quirky ideas and finding ways to bring them to life. After completing my undergraduate studies, I decided to follow my passion and moved to Brisbane to pursue further studies in Interaction Design.
              </p>
              <p>
                I've worked on projects involving both web applications and interactive devices, always focusing on real user needs and collaborative design. I love blending creativity with research, and I'm happiest when I'm solving problems that make everyday life easier—and more enjoyable.
              </p>
              <p>
                Currently based in Brisbane — keep learning, keep building. Let’s make something meaningful.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutme-education scroll-animate">
          <h2>Education</h2>
          <p>
            <strong>Liaoning Normal University</strong><br />
            Bachelor of Translation (June 2016 – September 2020)
          </p>
          <p>
            <strong>The University of Queensland</strong><br />
            Master of Interaction Design (February 2023 – November 2024)
          </p>
        </section>

        <section className="aboutme-skill scroll-animate">
          <h2>Skills</h2>

          <h3>Website Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>React</li>
          </ul>

          <h3>UI & UX Design</h3>
          <ul>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
          </ul>

          <h3>Embedded Development</h3>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>Microcontroller</li>
          </ul>

          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
