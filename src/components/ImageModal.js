import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({
  isOpen,
  onClose,
  image,
  title,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && canGoPrevious) onPrevious();
      if (e.key === 'ArrowRight' && canGoNext) onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious, canGoNext, canGoPrevious]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="modal-close"
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Previous Button */}
      {canGoPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="modal-nav modal-prev"
          aria-label="Previous image"
        >
          ←
        </button>
      )}

      {/* Image Container */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>

      {/* Next Button */}
      {canGoNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="modal-nav modal-next"
          aria-label="Next image"
        >
          →
        </button>
      )}
    </div>
  );
};

export default ImageModal;
