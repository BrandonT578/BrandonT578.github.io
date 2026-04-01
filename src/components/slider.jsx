
import React, {useState, useEffect} from 'react';

const slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  UseEffect(() => {
    const interval = setInterval(() => autoscroll(), 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const autoscroll = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

  useEffect(() => {
    const interval = setInterval(() => autoscroll(), 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className=" image slider">
      <ul>  
        {slides.map((slide, index) => (
            <li key={index} className={index === currentIndex ? "active" : ""}>
                <img src={slide} alt={`Slide ${index}`} />
            </li>


        ))}
        </ul>
    </div>
  );
}