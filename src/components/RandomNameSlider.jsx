import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './RandomNameSlider.css';

const RandomNameSlider = ({ setFunciones, names }) => {
  const [remainingNames, setRemainingNames] = useState(names);
  const [selectedName, setSelectedName] = useState(null);
  const [isSliding, setIsSliding] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: isSliding ? 1000 : 0,
    config: { duration: 3000 },
    onRest: () => {
      if (remainingNames.length > 0 && !selectedName) {
        const randomIndex = Math.floor(Math.random() * remainingNames.length);
        const name = remainingNames[randomIndex];
        console.log(name)
        setSelectedName(name);
        setRemainingNames(remainingNames.filter((_, index) => index !== randomIndex));
      }
      setIsSliding(false);
    },
  });

  const funcion1 = () => {
    if (remainingNames.length > 0 && !selectedName) {
      setIsSliding(true);
      setSelectedName(null);
    } else if (selectedName) {
      alert('A name has already been selected.');
    } else {
      alert('No more names to select.');
    }
  };

  const funcion2 = () => {
    alert('Función 2 del hijo ejecutada!');
  };

  useEffect(() => {
    if (setFunciones) {
      setFunciones({ funcion1, funcion2 });
    }
  }, [setFunciones]);

  const formatName = (name) => {
    return name
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
 // ["Juan Perez", "Maria Lopez", "Carlos Garcia"]
  
  return (
    <div className="random-name-slider">
      
      {!selectedName && <div className="slider-container">
        <animated.div
          className="slider"
          style={{
            transform: x.to(x => `translateX(-${x}%)`),
          }}
        >
          {names.concat(names).map((name, index) => (
            <div className="name" key={index}>
              {formatName(name)}
            </div>
          ))}
        </animated.div>
      </div>}
      {selectedName && (
        <div className="name">
          {formatName(selectedName)}
        </div>
      )}
    </div>
  );
};

export default RandomNameSlider;
