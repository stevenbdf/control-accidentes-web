import { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

const CustomCarousel = ({ images, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastIndex = images.length - 1;
      if (currentIndex === lastIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={images[currentIndex].url}
        alt={images[currentIndex].name}
      />
    </div>
  );
};

CustomCarousel.defaultProps = {
  speed: 5000,
};

CustomCarousel.propTypes = {
  images: Proptypes.instanceOf(Array).isRequired,
  speed: Proptypes.number,
};

export default CustomCarousel;
