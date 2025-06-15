import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <div className="img-containerc scroll-animate">
      <div className="focus">
        <div className="image-frame">
          <img src={images[focusedIndex].src} alt={`screenshot-${focusedIndex + 1}`} />
        </div>
        <p className="image-label">{images[focusedIndex].label}</p>
      </div>
      <ul>
        {images.map((item, index) => (
          <li key={index}>
            <img
              src={item.src}
              alt={item.label}
              onMouseEnter={() => setFocusedIndex(index)}
              onClick={() => setFocusedIndex(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;