
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
import FilterableList from './FilterableList';
import Dialog from './Dialog';
import Clock2 from './AnalogClock';

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
/**Pruebas */

/*
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
*/

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
  { question: "¿Qué entiendes por acoso sexual en el contexto de una institución educativa?", image: image2 },
  { question: "¿Crees que las políticas actuales son efectivas para prevenir el acoso sexual y proteger a las víctimas? ¿Por qué o por qué no?", image: image3 },
  { question: "¿Qué impacto crees que tiene el acoso sexual en las víctimas dentro del entorno educativo?", image: image4 }
];

const mensajes = [
  '¡Felicidades, {nombre}! ¡Es tu turno de contestar la siguiente pregunta! ¡Vamos, tú puedes!',
  '¡Genial, {nombre}! Ahora es tu momento de brillar. Responde la pregunta cuando estés listo.',
  '¡Es tu turno, {nombre}! ¡Demuéstranos lo que sabes!',
  '¡Adelante, {nombre}! Es tu oportunidad para contestar la siguiente pregunta. ¡Buena suerte!',
  '¡{nombre}, es tu momento! ¡Responde la pregunta y muestra tus conocimientos!',
  '¡Vamos, {nombre}! ¡Confío en que lo harás genial!',
  '¡Es tu turno, {nombre}! ¡A por ello!',
  '¡Tú puedes, {nombre}! ¡Contesta la siguiente pregunta!',
  '¡Es tu turno, {nombre}! ¡Estoy seguro de que sabrás la respuesta!',
  '¡{nombre}, adelante! ¡Es tu momento de brillar!',
  '¡Ahora te toca a ti, {nombre}! ¡Vamos!',
  '¡Es tu turno, {nombre}! ¡No hay nada que no puedas hacer!',
  '¡Vamos, {nombre}! ¡Es tu turno de responder!',
  '¡Es tu momento, {nombre}! ¡Adelante!',
  '¡{nombre}, es tu turno de brillar! ¡Buena suerte!',
  '¡Es tu turno, {nombre}! ¡Hazlo lo mejor que puedas!',
  '¡Vamos, {nombre}! ¡Es tu oportunidad de demostrar lo que sabes!',
  '¡Es tu turno, {nombre}! ¡No dudes y responde!',
  '¡{nombre}, ahora te toca a ti! ¡Confío en ti!',
  '¡Es tu turno, {nombre}! ¡Muéstranos de qué estás hecho!',
  '¡{nombre}, es tu momento! ¡Responde con confianza!',
  '¡Vamos, {nombre}! ¡Es tu turno de contestar!',
  '¡Es tu turno, {nombre}! ¡Sé que lo harás genial!',
  '¡Es tu momento de brillar, {nombre}! ¡Buena suerte!',
  '¡{nombre}, adelante! ¡Es tu turno de contestar!',
  '¡Es tu turno, {nombre}! ¡Estoy seguro de que sabes la respuesta!',
  '¡Vamos, {nombre}! ¡Es tu oportunidad de responder!',
  '¡Es tu turno, {nombre}! ¡Hazlo genial!',
  '¡{nombre}, es tu turno! ¡Mucha suerte!',
  '¡Es tu momento, {nombre}! ¡Confía en ti mismo!'
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
  const [info, setInfo] = useState([]);
  const [message, setMessage] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [data, setData] = useState("");
  const [functions, setFunctions] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);

  const todasReveladas = revealedCards.every(card => card === true);

  useEffect(() => {
    setShuffledCards(shuffleArray(cardsData));
  }, []);

  const addData = (index, data) => {
    const newData = { index: index, data: data };
    const newMessage = { index: index, data: obtenerMensajeAleatorio() };
    setInfo([...info, newData]);
    setMessage([...message, newMessage])
  };

  const addSelectedName = (name) => {
    setSelectedNames([...selectedNames, name]);
  };

  const handleCardClick = (index) => {
    if (data !== "") {
      addData(index, data);
      const newRevealedCards = [...revealedCards];
      newRevealedCards[index] = true;
      setRevealedCards(newRevealedCards);
      addSelectedName(data);
      setData("");
    } else {
      alert("Seleccione un participante.");
    }
  };

  const handleReset = () => {
    setRevealedCards([false, false, false, false]);
    setShuffledCards(shuffleArray(cardsData));
    setInfo([]);
    setMessage([])
    setSelectedNames([]);
  };

  const manejarClick1 = () => {
    if (functions.funcion1 && data === '') {
      functions.funcion1();
    }
  };



  function obtenerPrimerNombreYApellido(nombreCompleto) {
    // Dividir la cadena en palabras
    const palabras = nombreCompleto.split(' ');

    // Verificar si hay suficientes palabras para extraer el primer nombre y primer apellido
    if (palabras.length < 2) {
      return null; // o algún mensaje de error si prefieres
    }

    // Extraer el primer nombre y el primer apellido
    const primerNombre = palabras[0];
    const primerApellido = palabras[2] || palabras[1]; // Asumiendo que el primer apellido siempre está en la segunda o tercera posición

    return `${primerNombre} ${primerApellido}`;
  }

  const obtenerMensajeAleatorio = () => {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    return mensajeAleatorio;
  };

  const reemplazarPalabra = (texto, palabra, reemplazo) => {
    return texto.replace(palabra, reemplazo)
  }


  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className='menu'>
        <div className='options'>
          <button className='reset' onClick={handleReset}>Reset</button>
          <button className='reset' onClick={manejarClick1}>Random participant</button>
          <FilterableList names={names} sendData={setData} selectedNames={selectedNames} addSelectedName={addSelectedName} nameSelect={data} />

        </div>

        <div className='insti'>
          <div>Universidad Nacional de Loja</div>
          <div>Pedagogía de las ciencias experimentales - Informática</div>
        </div>
      </div>
      <RandomNameSlider setFunciones={setFunctions} names={names} onSendData={setData} selectedNames={selectedNames} addSelectedName={addSelectedName} nameSelect={data} />

      <div className='content'>
        <div style={{ width: '450px', height: '500px', marginTop: '30px' }}>
          {todasReveladas && <button className='reset end' onClick={() => setDialogOpen(true)}>Thank you</button>}
          {dialogOpen && <Dialog onClose={() => setDialogOpen(false)} participants={info} />}
          <Clock2 />
        </div>
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            className={`card ${revealedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div
              onMouseOver={() => setIsHovered(index)}
              onMouseOut={() => setIsHovered(null)}
              className="card-inner">
              <div className="card-front">
                <img className='image image-front' src={card.image} alt="" />
                <div style={{ position: 'absolute', zIndex: '50' }}>
                  <div className={`number ${isHovered === index ? 'active' : ''}`}>{index + 1}</div>
                </div>
              </div>
              <div className="card-back">
                <img className='image' src={image5} alt="" />
                <div style={{ position: 'absolute', zIndex: '50', padding: '10px' }}>
                  {info.find(i => i.index === index)?.data && (
                    <div className='turno'>
                      {reemplazarPalabra(message.find(i => i.index === index).data, '{nombre}', obtenerPrimerNombreYApellido(formatName(info.find(i => i.index === index).data)))}
                    </div>
                  )}
                  <div className='pregunta'>{card.question}</div>
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
        <div className='copy'>Cristhian Giron © All rights reserved 2024</div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
