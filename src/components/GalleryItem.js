import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({ id, size = 'medium', image, title, onClick }) => {
  const sizeClasses = {
    small: 'row-span-1',
    medium: 'row-span-2',
    large: 'row-span-3',
    wide: 'col-span-2 row-span-2',
  };

  return (
    <div
      onClick={onClick}
      className={`gallery-item ${sizeClasses[size]}`}
    >
      {image && (
        <img 
          src={image} 
          alt={title || `Bakery item ${id}`}
        />
      )}
      
      {title && (
        <div className="gallery-overlay">
          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
