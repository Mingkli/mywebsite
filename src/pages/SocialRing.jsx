import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import bgImage from '../assets/img/sr.jpg'; // adjust path
import img1 from '../assets/img/sr-1.jpg';
import img2 from '../assets/img/sr-2.png';
// import img3 from '../assets/img/sr-3.png';
import img4 from '../assets/img/sr-4.png';
import img5 from '../assets/img/sr-5.png';
import img6 from '../assets/img/sr-6.jpeg';
import workflowSc from '../assets/img/scw.png';

const SocialRing = () => {
      const galleryImages = [
        { src: img1, label: 'High-fidelity companion app interface for real-time social matching.' },
        { src: img2, label: 'Initial system architecture and interaction flow mapping' },
        { src: img4, label: '3D printing of the braclet case.' },
        { src: img5, label: 'Wearable hardware prototype integrating ESP32, sensors, and vibration motor.' },
        { src: img6, label: 'Exhibition in trade show' }
      ];

    return (
      <ProjectTemplate
        title="SocialCircle"
        backgroundImage={bgImage}
        concept={[
          "SocialCircle is a wearable device paired with a companion website designed to promote spontaneous face-to-face interactions among university students. It addresses the growing issue of social disconnection on campus caused by reliance on digital communication.",
          "By allowing users to input their interests and discreetly find like-minded peers nearby, SocialCircle reduces the friction of starting conversations in physical spaces, especially for students who struggle with social anxiety or unfamiliar group settings."
        ]}
        myRole={[
          "Led the interaction design flow and website prototyping.",
          "Conducted user research interviews and user testing.",
          "Developed proximity detection logic, vibration feedback, and matching algorithms.",
          "Designed high-fidelity prototypes for the companion web app using Adobe XD.",
          "Designed exhibition materials.",
          "Collaborated on team coordination and final trade show preparation."
        ]}  
        galleryImages={galleryImages} 
        userResearch={
          "We conducted two rounds of semi-structured interviews with a total of 13 students. The first focused on understanding challenges around face-to-face communication, revealing that both introverts and extroverts struggle with approaching strangers. The second round tested our design concept, confirming its potential and surfacing valuable feedback on clarity, safety, and usability. Users appreciated the idea of interest-based matching and subtle notifications."
        }
        designOpportunities={[
          {
            title: "Discreet Interaction",
            description: "Enable users to find potential matches without drawing public attention by using subtle vibration and light signals."
          },
          {
            title: "Shared Interest Discovery",
            description: "Use common hobbies and interests as the foundation for conversation, helping users overcome social anxiety and awkwardness."
          },
          {
            title: "Companion Control Platform",
            description: "Provide a web-based interface for setting user preferences, managing interactions, and enhancing usability and accessibility."
          },
          {
            title: "Ethical Safety Design",
            description: "Prioritized discreet alerts and privacy-preserving matching to ensure both safety and comfort for users in real-world environments."
          }
        ]}
        audience="The target audience is university students aged 18–30 who want to build real-life social connections but struggle with initiating conversations in person due to anxiety, lack of confidence, or cultural barriers."
        values={[
          "Fosters real-world human interaction over digital dependency",
          "Respects user privacy with minimal data sharing",
          "Promotes mental well-being by reducing isolation",
          "Accessible for both introverts and extroverts",
          "Engages users in playful, gamified social exploration",
          "Designed to be affordable and financially accessible for students.",
          "Ethically handles personal data with transparency and user control."
        ]}
        features={[
          "A wearable device that vibrates and lights up when matched users are nearby",
          "Interest input and profile management via a secure web app",
          "Soft feedback (e.g., color-coded LEDs) to guide users toward matches",
          "Real-time interaction control and customization through the companion site",
          "Lightweight, user-friendly, and socially acceptable form factor"
        ]}
        workflowImage={workflowSc}
        development={[
          "Early paper and Wizard-of-Oz prototypes tested interaction flow and feasibility.",
          "Built hardware prototypes using ESP32, vibration motors, LEDs, and proximity sensors.",
          "User testing informed critical changes: replacing bright lights with vibration for safety, adding user-controlled matching mode, and simplifying hardware form factor.",
          "Developed companion web app high-fidelity prototype using Adobe XD.",
          "Team collaboration involved structured feedback sessions, real-time coordination, and adaptive task management to ensure smooth delivery.",
          "Presented fully functional prototype and companion app at public trade show."
        ]}
        relatedLinks={[
          { label: "Website Prototype", url: "https://xd.adobe.com/view/60e54958-9d4f-4f7e-b4b2-1dd0f20b7c64-35b6/" },
          { label: "Trade Show Poster", url: "https://www.canva.com/design/DAGTswp4kkE/ydRZ4iSTY0auxp8K52uNBg/edit?utm_content=DAGTswp4kkE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
          { label: "Brochure", url: "https://www.canva.com/design/DAGT4CEs2To/AxCHZDtfnkATh1Fm1GQuYA/edit?utm_content=DAGT4CEs2To&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
        ]}
      />
    );
  };
  
  export default SocialRing;