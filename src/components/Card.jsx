import React, { useState, useEffect } from 'react';
import './Card.css';

import image1 from '../assets/1.png';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/reverso.jpg';
import RandomNameSlider from './RandomNameSlider';
import Clock from './Clock';
import Marquee from './Marquee';

/*const names = [
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
];*/
/**Pruebas */
const names = [
  "Juan Carlos Pérez Gómez",
  "María Luisa García Fernández",
  "José Antonio Rodríguez López",
  "Ana Isabel Martínez Sánchez",
  "Luis Fernando González Ramírez",
  "Laura Patricia Hernández Díaz",
  "Carlos Alberto López Jiménez",
  "Marta Beatriz Fernández Castro",
  "Pedro Miguel Sánchez Ruiz",
  "Elena Sofía Ramírez Torres",
  "Raúl Javier Morales Gutiérrez",
  "Lucía Adriana Torres Delgado",
  "Sergio Manuel Ortiz Romero",
  "Claudia Teresa Vargas Peña",
  "Ricardo Andrés Cruz Herrera",
  "Patricia Elena Soto Mendoza",
  "Francisco Javier Navarro Silva",
  "Isabel Cristina Ramos Guerrero",
  "Fernando Luis Castillo Campos",
  "Gabriela Inés Medina Rivas",
  "Alberto Jesús Flores Vega",
  "Verónica Cecilia Reyes Fuentes",
  "Héctor Daniel Aguilar Morales",
  "Alejandra María Ortiz Herrera",
  "Gustavo Enrique Castro Rojas",
  "Rosa María Vega Márquez",
  "Manuel Eduardo Romero Paredes",
  "Sofía Isabel Herrera Cruz",
  "Diego Alejandro Gutiérrez Núñez",
  "Valeria Teresa Ríos Hernández"
];

const integrantes = [

  "David Pérez.",
  "Natalia Martínez.",
  "Jorge Ramírez.",
  "Carolina Gomez.",
  "Andrés Torres",
  "Sara Patricia"
]


const cardsData = [
  { question: "¿Crees que el acoso sexual es un problema común en las instituciones educativas de Ecuador? ¿Por qué?", image: image1 },
  { question: "¿Alguna vez has sido testigo o has escuchado sobre casos de acoso sexual en tu institución educativa?", image: image2 },
  { question: "¿Crees que las políticas actuales son efectivas para prevenir el acoso sexual y proteger a las víctimas? ¿Por qué o por qué no?", image: image3 },
  { question: "¿Qué impacto crees que tiene el acoso sexual en las víctimas dentro del entorno educativo?", image: image4 }
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
  const [mensaje, setMensaje] = useState("")
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
    } else {
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
          <button className='reset' onClick={manejarClick1}>Random participant</button>
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

            {integrantes.map(integrantes => {
              return (
                <span>- {integrantes} <br /></span>

              )
            })}
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
                <div style={{ position: 'absolute', zIndex: '50', padding: '10px' }}>
                  {info.find(i => i.index === index)?.data && (
                    <div className='turno'>Felicitaciones {formatName(info.find(i => i.index === index).data)} tienes la oportunidad de responder la siguiente pregunta:</div>
                  )}
                  <div className='pregunta'>
                    {card.question}
                  </div>

                  <br />

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='footer'>
        <div className='clockc'>
          <Clock />
        </div>
        <Marquee text='"El único hombre que no se equivoca es el que nunca hace nada." - Theodore Roosevelt' />
        <div className='copy'>
          Cristhian Giron © All rights reserved 2024
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Card;



