/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, createRef } from 'react';
import Proptypes from 'prop-types';

const VideoCarousel = ({ videos }) => {
  const videoRef = createRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSeeked = () => {
    if (videos.length) {
      console.log({ currentIndex });
      const lastIndex = videos.length - 1;
      if (currentIndex === lastIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    videoRef.current.addEventListener('seeked', handleSeeked);
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe src="silence.mp3" allow="autoplay" id="audio" style={{ display: 'none' }} />
      <video ref={videoRef} className="h-full" src={videos[currentIndex]} autoPlay loop />
    </div>
  );
};

VideoCarousel.propTypes = {
  videos: Proptypes.instanceOf(Array).isRequired,
};

export default VideoCarousel;
