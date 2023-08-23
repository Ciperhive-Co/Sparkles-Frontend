import React, { useEffect, useState, useRef } from 'react';
import './ComparisonSlider.css';
import clean from './cleancar.png';
import dirty from './dirty-car.png';

const ComparisonSlider = () => {
  const [active, setActive] = useState(false);
  const sliderRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const handlePointerDown = (e) => {
      e.preventDefault();
      setActive(true);
      scroller.classList.add('scrolling');
    };

    const handlePointerUp = () => {
      setActive(false);
      scroller.classList.remove('scrolling');
    };

    const handlePointerMove = (e) => {
      if (!active) return;

      let x;
      if (e.touches) {
        x = e.touches[0].pageX;
      } else {
        x = e.pageX;
      }
      x -= wrapper.getBoundingClientRect().left;
      scrollIt(x);
    };

    const handlePointerLeave = () => {
      setActive(false);
      scroller.classList.remove('scrolling');
    };

    const scrollIt = (x) => {
      let transform = Math.max(0, Math.min(x, wrapper.offsetWidth));
      document.querySelector('.after').style.width = transform + 'px';
      scroller.style.left = transform - 25 + 'px';
    };

    const scroller = document.querySelector('.scroller');
    const wrapper = document.querySelector('.wrapper');

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [active]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggered.current) {
          animateSlider();
          animationTriggered.current = true; // Mark animation as triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(sliderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateSlider = () => {
    const scroller = document.querySelector('.scroller');
    const wrapper = document.querySelector('.wrapper');

    const scrollIt = (x) => {
      let transform = Math.max(0, Math.min(x, wrapper.offsetWidth));
      document.querySelector('.after').style.width = transform + 'px';
      scroller.style.left = transform - 25 + 'px';
    };

    const initialX = -100;
    const finalX = wrapper.offsetWidth - 50 + 50;

    let currentTime = 0;
    const duration = 5000;

    const animationInterval = setInterval(() => {
      if (currentTime <= duration) {
        const progress = currentTime / duration;
        const newX = initialX + progress * (finalX - initialX);
        scrollIt(newX);
        currentTime += 16;
      } else {
        clearInterval(animationInterval);
      }
    }, 16);
  };

  return (
    <div id="page">
      <div ref={sliderRef} className="slider-container">
        <div className="wrapper">
          <div className="before">
            <img className="content-image" src={dirty} draggable="false" alt="Dirty Car" />
          </div>
          <div className="after">
            <img className="content-image" src={clean} draggable="false" alt="Clean Car" />
          </div>
          <div className="scroller">
            <svg className="scroller__thumb" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <polygon points="0 50 37 68 37 32 0 50" style={{ fill: '#24245a' }} />
              <polygon points="100 50 64 32 64 68 100 50" style={{ fill: '#24245a' }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
