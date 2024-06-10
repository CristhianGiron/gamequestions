import React, { useEffect, useRef, useState } from 'react';
import './Dialog.css';
import Escritura from './Escritura';

const Dialog = ({ onClose, participants }) => {
    const [paragraphs, setParagraphs] = useState([
        ". Quiero expresar mi más sincero agradecimiento a todos ustedes por estar aquí hoy. Agradezco a todos los participantes por su entusiasmo y compromiso.",
        "La participación es fundamental. Nos permite compartir ideas, aprender unos de otros y crecer juntos. Cada uno de ustedes aporta algo único y valioso, y es esa diversidad la que nos fortalece como comunidad.",
        "Gracias por su energía, pasión y por creer en el poder de la colaboración. Sigamos participando y construyendo un futuro mejor juntos.",
        "Agradecimientos especiales a:",
        "Muchas Gracias.",
    ]);
    const formatName = (name) => {
        return name
            .trim()
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };


    const hasRunEffect = useRef(false);

    useEffect(() => {
        if (hasRunEffect.current) {
            return;
        }

        const newParagraphs = [...paragraphs];
        const newElements = participants.map(data => `- ${formatName(data.data)}.`);
        newParagraphs.splice(4, 0, ...newElements); // Insert new elements at position 2
        setParagraphs(newParagraphs);



        hasRunEffect.current = true; // Marcar que el efecto ya se ejecutó

        // Si `paragraphs` es parte del estado del componente, asegúrate de actualizar el estado aquí
        // setParagraphs([...paragraphs]);

    }, []);

    return (
        <div className={`dialog `}>
            <div className="dialog-header">
                <span className="dialog-title">Thank you window</span>
                <div className="dialog-buttons">
                    <button className="minimize">-</button>
                    <button className="maximize">□</button>
                    <button className="close" onClick={onClose}>X</button>
                </div>
            </div>
            <div className="dialog-body">

                <Escritura paragraphs={paragraphs} />
            </div>
        </div>
    );
};

export default Dialog;
