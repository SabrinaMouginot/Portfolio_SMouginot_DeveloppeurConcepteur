import { useEffect, useState } from 'react';
import './Intro.css';
import photo from '../../../public/photo.jpg'; // remplace par le bon chemin
import PropTypes from 'prop-types';

const Intro = ({ onIntroEnd }) => {
  const textToDisplay = "Bonjour, je suis Sabrina, Développeur concepteur, spécialisée frontend.";

  const [formattedChars, setFormattedChars] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Affiche la photo après un petit délai
    const imageTimeout = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => clearTimeout(imageTimeout);
  }, []);

  useEffect(() => {
    if (!showImage) return;

    const chars = textToDisplay.split('');
    const display = [];

    let delay = 0;
    let charIndex = 0;

    chars.forEach((char, idx, arr) => {
      const isCommaSpace = char === ',' && arr[idx + 1] === ' ';
      const animationDelay = delay;

      if (isCommaSpace) {
        // Affiche la virgule avec retour à la ligne
        display.push(
          <span key={charIndex++} style={{ animationDelay: `${animationDelay}s` }} className="char">
            {char}
            <br />
          </span>
        );

        // Incrémente la durée d'une pause supplémentaire
        delay += 1;
      } else if (char !== ' ' || (arr[idx - 1] !== ',' && arr[idx - 1] !== ' ')) {
        // Affiche caractère normal (évite de dupliquer les espaces)
        display.push(
          <span key={charIndex++} style={{ animationDelay: `${animationDelay}s` }} className="char">
            {char}
          </span>
        );
      }

      delay += 0.05;
    });

    setFormattedChars(display);

    // Lancer le menu après toute l'animation
    const totalDuration = delay * 1000;
    const endTimeout = setTimeout(() => {
      onIntroEnd(); // callback vers Home.jsx
    }, totalDuration + 200); // petit tampon

    return () => clearTimeout(endTimeout);
  }, [showImage, onIntroEnd]);

  return (
    <div className="intro-container">
      {showImage && (
        <div className="intro-content">
          <img src={photo} alt="Sabrina Mouginot" className="intro-photo" />
          <p className="typewriter">{formattedChars}</p>
        </div>
      )}
    </div>
  );
};

Intro.propTypes = {
  onIntroEnd: PropTypes.func.isRequired,
};

export default Intro;
