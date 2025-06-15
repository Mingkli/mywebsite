import React from 'react';
import '../components/ProjectTemplate.css';
import ScrollAnimation from '../components/ScrollAnimation'; 
import ImageGallery from '../components/ImageGallery';

const ProjectTemplate = ({
  title,
  backgroundImage,
  concept,
  myRole,
  galleryImages,
  userResearch,
  designOpportunities,
  audience,
  values,
  features,
  workflowImage,
  development,
  relatedLinks
}) => {
  return (
    <div className="project-description">
        <ScrollAnimation />

      <div className="project-headimg" style={{
        backgroundImage: `radial-gradient(ellipse at center, rgba(26, 26, 26, 0) 60%, rgba(26, 26, 26, 1) 100%), url(${backgroundImage})`
      }}>
        <h1>{title}</h1>
      </div>

      <section className="project-section scroll-animate">
        <h2>Concept</h2>
        {concept.map((para, i) => <p key={i}>{para}</p>)}
      </section>

      <section className="project-section scroll-animate">
         <h2>My Role</h2>
         <ul>
            {myRole.map((r, i) => <li key={i}>{r}</li>)}
         </ul>
      </section>

      {galleryImages && galleryImages.length > 0 && (
        <section className="project-section scroll-animate">
          <h2>Gallery</h2>
          <ImageGallery images={galleryImages} />
        </section>
      )}

      <section className="project-section scroll-animate">
        <h2>User Research</h2>
        <p>{userResearch}</p>
      </section>

      <section className="project-section scroll-animate">
        <h2>Design Opportunity</h2>
        {designOpportunities.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="project-section scroll-animate">
        <h2>Audience</h2>
        <p>{audience}</p>
      </section>

      <section className="project-section scroll-animate">
      <h2>Value</h2>
      <ul>
        {values.map((v, i) => <li key={i}>{v}</li>)}
      </ul>
      </section>

      <section className="project-section scroll-animate">
        <h2>Key Feature</h2>
        {features.map((f, i) => <p key={i}>{f}</p>)}
      </section>

      {workflowImage && (
        <section className="project-section scroll-animate">
          <h2>Interaction Flow</h2>
          <img
            src={workflowImage}
            alt="Workflow diagram"
            className="workflow-full-image"
          />
        </section>
      )}

      <section className="project-section scroll-animate">
        <h2>Development</h2>
        {development.map((d, i) => <p key={i}>{d}</p>)}
      </section>
      
      <section className="project-section scroll-animate">
        {relatedLinks && relatedLinks.length > 0 && (
        <>
           <h2>Related Links</h2>
            <ul>
              {relatedLinks.map((link, i) => (
               <li key={i}>
                 <a href={link.url} target="_blank" rel="noreferrer">
                   {link.label}
                  </a>
                </li>
             ))}
            </ul>
         </>
       )}
      </section>
    </div>
  );
};

export default ProjectTemplate;
