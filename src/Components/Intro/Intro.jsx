import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Intro.css";
import photo from "../../../public/photo.jpg";

const Intro = ({ onIntroEnd }) => {
  const [displayedWords, setDisplayedWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // On découpe la phrase tout en conservant les ", " pour identifier les pauses
  const fullText = "Bonjour, je suis Sabrina, Développeur concepteur, spécialisée frontend.";
  const wordChunks = fullText.split(" ").map((word, idx, arr) => {
    // Si le mot se termine par une virgule, on insère un saut de ligne après
    if (word.endsWith(",")) return word + "<br>";
    return word;
  });

  // Quand l'image est animée, on démarre l'animation du texte
  const handlePhotoAnimationComplete = () => {
    setStartTyping(true);
  };

  useEffect(() => {
    if (!startTyping || currentIndex >= wordChunks.length) return;

    const currentWord = wordChunks[currentIndex];

    const delay = currentWord.endsWith("<br>") ? 1000 : 200; // 1s après les virgules, 200ms sinon

    const timeout = setTimeout(() => {
      setDisplayedWords((prev) => [...prev, currentWord]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [startTyping, currentIndex, wordChunks]);

  useEffect(() => {
    if (currentIndex === wordChunks.length && onIntroEnd) {
      const delay = setTimeout(() => {
        onIntroEnd();
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [currentIndex, wordChunks.length, onIntroEnd]);

  return (
    <div className="intro-container">
      <motion.img
        src={photo}
        alt="Portrait de Sabrina"
        className="intro-photo"
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={handlePhotoAnimationComplete}
      />

      <div className="intro-text">
        <span dangerouslySetInnerHTML={{ __html: displayedWords.join(" ") }} />
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

Intro.propTypes = {
  onIntroEnd: PropTypes.func,
};

export default Intro;