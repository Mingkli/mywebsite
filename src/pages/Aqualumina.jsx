import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import bgImage from '../assets/img/aqual.jpeg'; 
import workflowImage from '../assets/img/aw.png';

import img1 from '../assets/img/a1.png';
import img2 from '../assets/img/a2.png';
import img3 from '../assets/img/a3.png';
import img4 from '../assets/img/a4.png';
import img5 from '../assets/img/a5.png';
import img6 from '../assets/img/a6.jpeg';
import img7 from '../assets/img/a7.jpeg';

const Aqualumina = () => {
  const galleryImages = [  { src: img1, label: 'Seaweed Prototype' },
    { src: img2, label: 'Fish Movement Testing' },
    { src: img3, label: 'Light Sensors and ultrasonic sensors Calibration' },
    { src: img4, label: 'Hardware Assembly' },
    { src: img5, label: 'Final Fish Prototype' },
    { src: img6, label: 'Final prototypes' },
    { src: img7, label: 'Trade Show Setup' }
  ];

  return (
    <ProjectTemplate
      title="Aqualumina"
      backgroundImage={bgImage}
      concept={[
        "Aqualumina is an immersive educational installation that simulates marine biodiversity and conservation through interactive physical prototypes. The system allows users to actively control seaweed and fish using light-based input, helping them understand the balance of marine ecosystems and human impact on corals.",
        "Throughout the project, our team applied iterative design and prototyping methods, refining both interaction design and physical hardware to create an engaging hands-on experience for all age groups."
      ]}
      myRole={[
        "Developed the interaction flow.",
        "Led the hardware prototyping for seaweed and fish mechanisms using Arduino and servo motors.",
        "Designed and calibrated sensor input logic (LDR, color sensors and ultrasonic sensors).",
        "Conducted weekly user testing sessions and analyzed feedback for interaction refinement.",
        "Participated in exhibit setup and conducted live demonstrations during the trade show."
      ]}      
      galleryImages={galleryImages}
      userResearch={
        "Early research identified that physical interaction is highly effective for promoting marine conservation education. User testing with prototypes revealed the importance of intuitive feedback, responsiveness, and age-appropriate interaction complexity. Participants responded positively to both fish following light and the seaweed movement, which provided multi-layered learning opportunities."
      }
      designOpportunities={[
        {
          title: "Immersive Interaction",
          description: "Create an engaging and visually stimulating environment simulating underwater ecosystems."
        },
        {
          title: "Multi-sensory Engagement",
          description: "Leveraged light sensors, color sensors, and motor movements to create highly visual and tactile experiences."
        },
        {
          title: "Conservation Messaging",
          description: "Embedded educational narratives into the system, such as demonstrating coral habitat changes and the role of human intervention."
        },
        {
          title: "Accessibility & Safety",
          description: "Design intuitive, universally accessible interfaces with smooth physical structures and safe electronics."
        }
      ]}
      audience="The target audience includes museum visitors, families, and children aged 6+, who are curious about marine ecosystems and conservation topics. The system is also suitable for science exhibitions and public engagement events."
      values={[
        "Fosters experiential learning through real-time feedback",
        "Raises awareness about marine biodiversity and conservation",
        "Encourages collaborative interaction between multiple users",
        "Accessible to wide age ranges with intuitive light-based control",
        "Provides opportunities for educators to explain complex marine issues in a playful way"
      ]}
      features={[
        "User-controlled fish and seaweed behaviors via handheld lights",
        "Arduino-powered servo motors for smooth seaweed and fish motion",
        "LDR (light-dependent resistors) for detecting light input",
        "Color sensors to identify coral locations for fish behavior triggers"
      ]}
      workflowImage={workflowImage}
      development={[
        "The development began with conceptual sketches and storyboards to map interaction scenarios and exhibit flows.",
        "Initial low-fidelity paper and cardboard models helped define basic user behaviors and physical layouts.",
        "The team then built multiple prototypes integrating Arduino Uno, servo motors, LDR sensors, and color sensors, iterating weekly based on testing results.",
        "Challenges included calibrating light sensor sensitivity, fine-tuning motor speed for realism, and ensuring stability and safety of hardware for public interaction.",
        "Late-stage refinements involved redesigning coral habitats, improving fish stability on tracks, modifying the seaweed mechanism, and adding final visual and sound feedback to enhance immersion.",
        "The final system successfully demonstrated a multi-layered interactive learning environment that attracted participants of all ages during the public trade show presentation."
      ]}
      relatedLinks={[
        { label: "Trade Show Poster", url: "https://www.canva.com/design/DAGqZNLNFtA/URB7Y_yeg0hgll7GpK8XvQ/edit?utm_content=DAGqZNLNFtA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
        { label: "Interaction Flow", url: "https://miro.com/welcomeonboard/ekVLeWo3dWpOWDlKM25nTHRBWmhzWjdRQXNiRlFCc2NZQmplck9tTGVQUURDenZWUmtyUTZ0Yml4YkJtOTZOZ01QUHQzK0ZLR1BnSW1ZVm9FSWZQYkNyS1RNeGxhUitpWE5jZjJITjJjNlFTU1RYSFVwS1lsSERMVGFqMmpUZVFNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=421343683088https://www.canva.com/design/DAGT4CEs2To/AxCHZDtfnkATh1Fm1GQuYA/edit?utm_content=DAGT4CEs2To&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
      ]}
    />
  );
};

export default Aqualumina;
