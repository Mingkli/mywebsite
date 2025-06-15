import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import bgImage from '../assets/img/ek.png';
import img1 from '../assets/img/ek1.png';
import img2 from '../assets/img/ek2.png';
import img3 from '../assets/img/ek3.png';
import img4 from '../assets/img/ek4.png';
import img5 from '../assets/img/ek5.png';

const EarthKeepers = () => {

  const galleryImages = [
    { src: img1, label: 'Initial Low-fidelity Prototype.' },
    { src: img2, label: 'High-fidelity Prototype.' },
    { src: img3, label: 'Journal Page.' },
    { src: img4, label: 'Quiz Page.' },
    { src: img5, label: 'Search Page.' }
  ];

  return (
    <ProjectTemplate
      title="EarthKeepers"
      backgroundImage={bgImage}
      concept={[
        "EarthKeepers is an interactive educational website designed to raise environmental awareness among children aged 7 to 9. It introduces young learners to endangered, extinct, and vulnerable species in Queensland, Australia.",
        "The platform gamifies learning through map exploration, interactive quizzes, and storytelling elements. It also serves as a teaching support tool for primary school educators by combining informative content with playful digital interaction."
      ]}
      myRole={[
        "Led the functional interaction design, page structure, and user flow across the website.",
        "Designed and developed low-fidelity prototypes of all website pages using Nielsen's heuristics.",
        "Developed high-fidelity prototype for the interactive map page.",
        "Coded key website components including Welcome Page, Character Selection, Search and Journal Page.",
      ]}
      galleryImages={galleryImages} 
      userResearch={[
        "We conducted user testing with children and received feedback from tutors and peers. The original target age group (5–7) struggled with content comprehension and navigation. Based on this insight, we revised our audience to 7–9-year-olds. This change significantly improved usability, comprehension, and engagement."
      ]}
      designOpportunities={[
        { title: "Simplified Navigation", description: "Redesigned layout and map interaction flow for better accessibility by younger users." },
        { title: "Engaging Visuals", description: "Used pixel art aesthetics and vibrant themes to keep children visually engaged." },
        { title: "Knowledge Retention", description: "Quiz redesign allowed retrying failed questions, encouraging learning through repetition." },
        { title: "Inclusive Access", description: "Adjusted cognitive complexity of content based on developmental psychology research." }
      ]}
      audience="Primary school children aged 7–9 and teachers who want to introduce environmental education in an interactive and age-appropriate way."
      values={["Education", "Exploration", "Engagement", "Empathy", "Environmental Awareness"]}
      features={[
        "Character selection with a controllable pixel-art avatar",
        "Map-based exploration revealing local animal species",
        "Informative animal detail pages with dynamic content",
        "Smart search with suggestion dropdown and feedback alerts",
        "Journal with pagination showing animals by conservation status",
        "Quiz feature with points, lives, and retry logic",
        "Playful navigation bar using intuitive icons"
      ]}
      workflow={[

      ]}
      development={[
        "Developed all features using JavaScript, HTML, CSS and RESTful API integration",
        "API Fetch for dynamic content",
        "Frontend animation and interactivity",
        "Conducted peer and user testing, adjusting visuals and interactions",
        "Refined layout and content for cognitive and usability clarity"
      ]}
      relatedLinks={[
        { label: "high-fidelity", url: "https://xd.adobe.com/view/60fbeac4-9f4c-4e38-9e1d-36ea3ffaa9db-35a8/" },
      ]}
    />
  );
};

export default EarthKeepers;
