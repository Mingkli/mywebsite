import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import bgImage from '../assets/img/vb.png';
import img1 from '../assets/img/v1.png';
import img2 from '../assets/img/v2.png';
import img3 from '../assets/img/v3.png';
import img4 from '../assets/img/v4.png';
import img5 from '../assets/img/v5.png';

const VibeGrow = () => {
  const galleryImages = [
    { src: img1, label: 'Initial low-fedility prototype outlining app structure' },
    { src: img2, label: 'High-fedility design exploration with user flow adjustments based on feedback.' },
    { src: img3, label: 'Hardware prototyping with microcontroller, vibration motor, and plant monitoring sensors.' },
    { src: img4, label: 'User testing feedbacks and related iterations.' },
    { src: img5, label: 'Fully integrated system demonstration.' }
  ];

  return (
    <ProjectTemplate
      title="VibeGrow"
      backgroundImage={bgImage}
      concept={[
        "VibeGrow is an eco-friendly plant care solution that integrates pest control and plant health monitoring into one system. It combines a vibration-based pest repellent device with a companion web application, allowing users to monitor soil moisture, sunlight, humidity, and temperature while controlling pests without traditional pesticides.",
        "The device uses substrate-borne vibrations to disrupt pest communication pathways while providing gardeners with actionable data about their plants, creating a sustainable gardening experience that balances pest control with environmental responsibility."
      ]}
      myRole={[
        "Led UI/UX design for the web application interface, ensuring intuitive user interaction for non-technical gardeners.",
        "Conducted low-fidelity and high-fidelity prototyping to balance functionality, accessibility, and technical feasibility.",
        "Performed multiple rounds of user testing to gather feedback and refine key features such as data summaries, temperature display, and text guidance.",
        "Developed frontend components and collaborated on integration with backend APIs and cloud infrastructure.",
        "Researched and sourced plant data APIs while ensuring secure API key handling via environment variables.",
        "Contributed to problem-solving for technical integration challenges, including mock data usage during device-backend communication delays.",
        "Collaborated on ethical considerations related to hardware impact on beneficial insects and battery sustainability."
      ]}
      galleryImages={galleryImages} 
      userResearch={
        "We conducted iterative user testing sessions with our target audience: home gardeners. Initial feedback identified confusion about moisture percentages, sunlight values, and unclear vibration toggle functions. Based on this, we introduced text guidance, data summaries, and temperature readings to clarify plant conditions and better support users' care decisions."
      }
      designOpportunities={[
        { title: "Simplification of UI", description: "Redesigned interfaces to minimize cognitive load and provide clear, actionable plant care insights." },
        { title: "Dynamic Data Summarization", description: "Introduced weekly and daily summaries to allow users to track plant condition trends over time." },
        { title: "Technical Feasibility Alignment", description: "Prioritized Minimum Viable Product features to ensure sustainable development within resource constraints." },
        { title: "Ethical Impact Considerations", description: "Balanced pest repellent technology with careful attention to pollinator safety and environmental sustainability." }
      ]}
      audience="Everyday household gardeners and urban plant enthusiasts seeking sustainable, pesticide-free plant care solutions."
      values={[
        "Sustainability", 
        "Plant Health Monitoring", 
        "Eco-friendly Pest Control", 
        "User Accessibility", 
        "Environmental Responsibility"
      ]}
      features={[
        "Substrate-borne vibration pest repellent system",
        "Monitoring of soil moisture, humidity, sunlight, and temperature",
        "Cloud-based web application for remote plant data monitoring",
        "Secure backend API integration for device communication",
        "Data summaries with daily and weekly trend visualization",
        "Companion plant care database sourced via external APIs",
        "Web app accessible from both mobile and desktop devices"
      ]}
      development={[
        "Built frontend interface using React and asynchronous API fetching.",
        "Collaborated on RESTful API integration with cloud-hosted backend services.",
        "Performed secure API key handling with environment file configuration.",
        "Utilized mock JSON data for frontend development prior to full hardware integration.",
        "Implemented vibration control logic and synchronized plant monitoring sensors.",
        "Participated in hardware-software integration and final system testing."
      ]}
      relatedLinks={[
        { label: "VibeGrow Poster", url: "https://vibegrow.pro" },
        { label: "GitHub Repository", url: "https://github.com/yourprojectlink" }
      ]}
    />
  );
};

export default VibeGrow;
