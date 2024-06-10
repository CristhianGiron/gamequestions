import React, { useState, useEffect } from 'react';

import './Dialog.css'

function Escritura({paragraphs}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index < paragraphs.length) {
      if (charIndex < paragraphs[index].length) {
        setTimeout(() => {
          setText(prev => prev + paragraphs[index][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50);
      } else {
        setText(prev => prev + '\n\n');
        setCharIndex(0);
        setIndex(prev => prev + 1);
      }
    }
  }, [charIndex, index]);

  return (
    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', margin: '20px' }}>
      {text} <span className='cursor'>|</span>
    </div>
  );
}

export default Escritura;
