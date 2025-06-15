import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import bgImage from '../assets/img/cbt.png';
import workflowCb from '../assets/img/cbw.png'
import img1 from '../assets/img/cb-1.jpg';
import img2 from '../assets/img/cb-2.png';
import img3 from '../assets/img/cb-3.png';
import img4 from '../assets/img/cb-4.png';

const CrystalBall = () => {
  const galleryImages = [
    { src: img1, label: 'Setup with ESP32 and LCD output' },
    { src: img2, label: 'First Prototype testing of the crystal ball interaction module' },
    { src: img3, label: 'Hardware integration of sensors inside crystal ball housing.' },
    { src: img4, label: 'Full system assembly in trade show' },
  ];

  return (
    <ProjectTemplate
      title="Crystalball"
      backgroundImage={bgImage}
      concept={[
        "This interactive device is designed to enhance social interaction and engagement at parties or events by assigning participants a character based on the personality they wish to adopt. Each character is given its own evolving storyline, encouraging users to interact with others and co-create new narratives through real-time connections.",
        "By transforming social gatherings into immersive role-playing experiences, the device helps break the ice, foster meaningful connections, and make socializing more enjoyable—particularly for those who may feel uncomfortable in traditional party settings."
      ]}
      myRole={[
        "Developed the interaction flow.",
        "Conducted user research and user testings.",
        "Led the hardware prototyping using ESP32.",
        "Designed and calibrated proximity detection logic.",
      ]}  
      galleryImages={galleryImages} 
      userResearch={[
        "We conducted interviews and used cultural probe methods with young adults to identify common social pain points and uncover design opportunities for encouraging engagement and interaction."
      ]}
      designOpportunities={[
        { title: "See me at the corner", description: "Enhance extroversion and boost social confidence" },
        { title: "Is my friend here?", description: "Support group dynamics and collaborative play" },
        { title: "Can party be quieter?", description: "Address discomfort with loud, high-stimulation environments" },
        { title: "Can I be someone else?", description: "Enable role-play through a diverse range of character types" }
      ]}
      audience="Young people who want to participate more actively and confidently in social events, especially those who are shy, introverted, or unfamiliar with others at the gathering."
      values={["Belonging", "Comfort", "Fun", "Creativity"]}
      features={[
        "Role-Playing Mechanism",
        "Real-Time Character Linking",
        "Interactive Storylines",
        "Dynamic Task System",
        "Inclusive Social Experience"
      ]}
      workflowImage={workflowCb}
      development={["C++", "ESP32", "Miro Prototyping"]}
      relatedLinks={[
        { label: "Trade Show Poster", url: "https://www.canva.com/design/DAGqZNLNFtA/URB7Y_yeg0hgll7GpK8XvQ/edit?utm_content=DAGqZNLNFtA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
        { label: "Interaction Flow", url: "https://miro.com/welcomeonboard/ekVLeWo3dWpOWDlKM25nTHRBWmhzWjdRQXNiRlFCc2NZQmplck9tTGVQUURDenZWUmtyUTZ0Yml4YkJtOTZOZ01QUHQzK0ZLR1BnSW1ZVm9FSWZQYkNyS1RNeGxhUitpWE5jZjJITjJjNlFTU1RYSFVwS1lsSERMVGFqMmpUZVFNakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=421343683088https://www.canva.com/design/DAGT4CEs2To/AxCHZDtfnkATh1Fm1GQuYA/edit?utm_content=DAGT4CEs2To&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
      ]}
    />
  );
};

export default CrystalBall;
