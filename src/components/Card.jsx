import React, { useState, useEffect } from 'react';
import './Card.css';

import image1 from '../assets/1.png';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/reverso.jpg';
import RandomNameSlider from './RandomNameSlider';
import Clock from './Clock';

const names = [
  "KENNY ALEJANDRO ARMIJOS DIAZ",
  "JOHAN GUSTAVO BENITEZ JARAMILLO",
  "EDDY FABIAN BLACIO ASANZA",
  "JEFFERSON GEOVANNY BURI BURI",
  "LADY MABEL CABRERA ESPINOZA",
  "YOMAIRA FERNANDA CARRION CHAMBA",
  "BRIGITH STEFANIA CEVALLOS CHINININ",
  "GABRIEL ALEJANDRO CHAMBA VICENTE",
  "DIEGO FERNANDO ESPINOSA PIZARRO",
  "ARANTXA GABRIELA GARCES LUDEÑA",
  "CRISTHIAN HIPOLITO GIRON CHAMBA",
  "JOSE ABEL GUACHIZACA ROBLES",
  "CARLOS RUBEN GUADALIMA PLACENCIA",
  "RONALD PAUL JARAMILLO GONZAGA",
  "DABYS GABRIEL MACAS GONZALEZ",
  "MIREYA SILVANA MOROCHO VELEZ",
  "YANELA MISHELL NANTIP ZAMBRANO",
  "JORDY PATRICIO PACHECO NAULA",
  "DANNY PAUL PEÑAFIEL ALULIMA",
  "RONALDO LENIN PIEDRA VEGA",
  "SANTIAGO ENRIQUE REY JIMENEZ",
  "ANDREA FERNANDA RODRIGUEZ ORDOÑEZ",
  "SCARLETH JHULIANA ROJAS CUEVA",
  "ERIKA ALEJANDRA SALINAS ALBITO",
  "FERNANDA NICOLE SOTO MACAS",
  "JULIO ADRIAN ULLOA ESPINOZA",
  "YAHIR ALEXANDER VELASQUEZ CUENCA",
  "BELY ANGHELINA VITERI CASTRO",
  "JHOSTIN ALEXANDER WISUM TENDEZA",
];

const cardsData = [
  { question: "What is the capital of France?", image: image1 },
  { question: "What is 2 + 2?", image: image2 },
  { question: "What is the largest planet in our solar system?", image: image3 },
  { question: "Who wrote 'To be, or not to be?'", image: image4 }
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Card = () => {
  const [revealedCards, setRevealedCards] = useState([false, false, false, false]);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(cardsData));
  }, []);

  const handleCardClick = (index) => {
    const newRevealedCards = [...revealedCards];
    newRevealedCards[index] = true;
    setRevealedCards(newRevealedCards);
  };

  const handleReset = () => {
    setRevealedCards([false, false, false, false]);
    setShuffledCards(shuffleArray(cardsData));
  };
  const [funciones, setFunciones] = useState({});

  const manejarClick1 = () => {
    if (funciones.funcion1) {
      funciones.funcion1();
    }
  };

  const manejarClick2 = () => {
    if (funciones.funcion2) {
      funciones.funcion2();
    }
  };


  return (
    <div>
      <div className='menu'>
        <div className='options'>
          <button className='reset' onClick={handleReset}>Reset</button>
          <button className='reset' onClick={manejarClick1}>Random</button>
          <button className='reset' onClick={manejarClick2}>About</button>
        </div>


        <div className='insti'>
          <div>
            Universidad Nacional de Loja
          </div>
          <div>Pedagogía de las ciencias experimentales - Informática</div>

        </div>
      </div>
      <RandomNameSlider setFunciones={setFunciones} names={names} />


      <div className='content'>
        <div style={{ width: '450px', height: '500px', marginTop: '30px' }}>
          <div className='instrucciones' style={{ marginTop: '90px', marginRight: '60px' }}>
            <span className='instrucciones-title'>Instrucciones <br /> <br /></span>
            Seleccione una tarjeta, lea detenidamente la pregunta y exponga su respuesta. Sea lo mas sincero/a posible.
            <br /> <br /> "La sinceridad no consiste en decir todo lo que se piensa, sino en sentir todo lo que se dice." <br /> <br /> <span className='autor'>- Anónimo.</span> <br />
            <span>Integrantes</span> <br /> <br />
            <span>
              - Cristhian Girón. <br />
              - Lady Cabrera. <br />
              - José Guachizaca. <br />
              - Erika Salinas. <br />
              - Mireya Morocho. <br />
              - Danny Peñafiel. <br />
            </span>
          </div>
        </div>
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            className={`card ${revealedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  className='image image-front'
                  src={card.image}
                  alt=""
                />
                <div style={{ position: 'absolute', zIndex: '50' }}>
                  <div className='number'>
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="card-back">
                <img

                  className='image'
                  src={image5}
                  alt=""
                />
                <div style={{ position: 'absolute', zIndex: '50' }}>
                  {card.question}
                </div>



              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='footer'>


        <div>
          <Clock />
        </div>

        <div>
          Cristhian Giron © All rights reserved 2024
        </div>

      </div>
    </div>

  );
};

export default Card;


