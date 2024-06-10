import React, { useEffect, useRef } from 'react';
import './AnalogClock.css'; // Guarda el CSS aquí

const Clock2 = () => {
  const digitGroups = useRef([]);

  useEffect(() => {
    const _timeElement10Digits = Array.from(Array(10)).map((n, i) => i);
    const _timeElement6Digits = _timeElement10Digits.slice(0, 6);
    const _timeElement3Digits = _timeElement10Digits.slice(0, 3);
    const _timeElementStructure = [
      [_timeElement3Digits, _timeElement10Digits],
      [_timeElement6Digits, _timeElement10Digits],
      [_timeElement6Digits, _timeElement10Digits]
    ];

    _timeElementStructure.forEach((digits, index) => {
      const digitGroup = document.createElement('div');
      digitGroup.classList.add('digit-group');
      digitGroups.current[index] = digitGroup;
      digits.forEach(digitList => {
        const digit = document.createElement('div');
        digit.classList.add('digit');
        digitList.forEach(n => {
          const ele = document.createElement('div');
          ele.classList.add('digit-number');
          ele.innerText = n;
          digit.appendChild(ele);
        });
        digitGroup.appendChild(digit);
      });
      document.getElementById('clock').appendChild(digitGroup);
    });

    const update = () => {
      const date = new Date();
      const time = [date.getHours(), date.getMinutes(), date.getSeconds()]
        .map(n => `0${n}`.slice(-2).split('').map(e => +e))
        .reduce((p, n) => p.concat(n), []);
      time.forEach((n, i) => {
        const digit = digitGroups.current[Math.floor(i * 0.5)].children[i % 2].children;
        Array.from(digit).forEach((e, i2) => e.classList[i2 === n ? 'add' : 'remove']('highlight'));
      });
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      // Cleanup
      digitGroups.current.forEach(group => {
        if (group) {
          group.remove();
        }
      });
    };
  }, []);

  return <div id="clock"></div>;
};

export default Clock2;
