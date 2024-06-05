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
  "YOMAIRA FERNANDA CARRION CHAMBA",
  "BRIGITH STEFANIA CEVALLOS CHINININ",
  "GABRIEL ALEJANDRO CHAMBA VICENTE",
  "DIEGO FERNANDO ESPINOSA PIZARRO",
  "ARANTXA GABRIELA GARCES LUDEÑA",
  "CARLOS RUBEN GUADALIMA PLACENCIA",
  "RONALD PAUL JARAMILLO GONZAGA",
  "DABYS GABRIEL MACAS GONZALEZ",
  "YANELA MISHELL NANTIP ZAMBRANO",
  "JORDY PATRICIO PACHECO NAULA",
  "RONALDO LENIN PIEDRA VEGA",
  "SANTIAGO ENRIQUE REY JIMENEZ",
  "ANDREA FERNANDA RODRIGUEZ ORDOÑEZ",
  "SCARLETH JHULIANA ROJAS CUEVA",
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

const formatName = (name) => {
  return name
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Card = () => {
  const [revealedCards, setRevealedCards] = useState([false, false, false, false]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [info, setInfo] = useState([]); //indice de tarjeta abierta y persona que la abrio
  const [mensaje, setMensaje] =useState("")
  useEffect(() => {
    setShuffledCards(shuffleArray(cardsData));
  }, []);

  const addData = (index, data) => {
    // Crea un nuevo objeto con la clave y valor deseado
    const newData = { index: index, data: data };

    // Actualiza el estado agregando el nuevo objeto al arreglo
    setInfo([...info, newData]);
  };

  const handleCardClick = (index) => {
    if (data !== "") {
      addData(index, data);
      const newRevealedCards = [...revealedCards];
      newRevealedCards[index] = true;
      setRevealedCards(newRevealedCards);
      setMensaje(false)
    }else{
      setMensaje("Seleccione un participante");
      alert("Seleccione un participante.")
    }
    setData("")
    

  };

  const handleReset = () => {
    setRevealedCards([false, false, false, false]);
    setShuffledCards(shuffleArray(cardsData));
    setInfo([]); // Resetea la información de las tarjetas volteadas
  };

  const [funciones, setFunciones] = useState({});

  const manejarClick1 = () => {
    if (funciones.funcion1) {
      funciones.funcion1();
    }
  };


  const [data, setData] = useState("");

  //ChildData: Nombre del jugador en turno
  const handleData = (childData) => {
    console.log(childData)
    setData(childData);
  };

  return (
    <div>
      <div className='menu'>
        <div className='options'>
          <button className='reset' onClick={handleReset}>Reset</button>
          <button className='reset' onClick={manejarClick1}>Random</button>
        </div>

        <div className='insti'>
          <div>
            Universidad Nacional de Loja
          </div>
          <div>Pedagogía de las ciencias experimentales - Informática</div>
        </div>
      </div>
      <RandomNameSlider setFunciones={setFunciones} names={names} onSendData={handleData} />

      <div className='content'>
        <div style={{ width: '450px', height: '500px', marginTop: '30px' }}>
          <div className='instrucciones' style={{ marginTop: '90px', marginRight: '60px' }}>
            <span className='instrucciones-title'>Instrucciones <br /> <br /></span>
            Seleccione una tarjeta, lea detenidamente la pregunta y exponga su respuesta. Sea lo más sincero/a posible.
            <br /> <br /> "La sinceridad no consiste en decir todo lo que se piensa, sino en sentir todo lo que se dice." <br /> <br /> <span className='autor'>- Anónimo.</span> <br />
            <span>Integrantes</span> <br /> <br />
            <span>- Cristhian Girón. <br />- Lady Cabrera. <br />- José Guachizaca. <br />- Erika Salinas. <br />- Mireya Morocho. <br />- Danny Peñafiel. <br />
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
                  <div className='pregunta'>
                    {card.question}
                  </div>

                  <br />
                  {info.find(i => i.index === index)?.data && (
                    <div className='turno'>{formatName(info.find(i => i.index === index).data)}</div>
                  )}
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
      <div>
      </div>
    </div>
  );
};

export default Card;



