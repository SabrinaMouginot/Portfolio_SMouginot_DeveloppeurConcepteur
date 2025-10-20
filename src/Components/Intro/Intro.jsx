import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Intro.css";

const Intro = ({ onIntroEnd }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [photoVisible, setPhotoVisible] = useState(false);
  const fullText = "Bonjour, je suis Sabrina, Développeur concepteur, spécialisée frontend.";

  // Étape 1 : apparition de la photo
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhotoVisible(true);
    }, 500); // apparition douce de la photo après 0,5 s
    return () => clearTimeout(timer);
  }, []);

  // Étape 2 : effet machine à écrire
  useEffect(() => {
    if (!photoVisible) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        // Appelle le callback une fois la phrase terminée
        if (onIntroEnd) onIntroEnd();
      }
    }, 50); // vitesse de frappe (50ms par lettre)
    return () => clearInterval(interval);
  }, [photoVisible, onIntroEnd]);

  return (
    <div className="intro-container">
      <div className={`intro-photo ${photoVisible ? "visible" : ""}`}>
        <img src="/photo.jpg" alt="Sabrina" />
      </div>

      <p className="intro-text">{displayedText}</p>
    </div>
  );
};

// Définition des PropTypes
Intro.propTypes = {
  onIntroEnd: PropTypes.func,
};

export default Intro;
