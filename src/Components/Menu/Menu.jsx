import './Menu.css';
import { Link, useLocation } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import {
  addOutline,
  homeOutline,
  personOutline,
  settingsOutline,
  mailOutline,
  videocamOutline,
  keyOutline,
  gameControllerOutline,
  cameraOutline
} from 'ionicons/icons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { to: '/', icon: homeOutline },
    { to: '/profile', icon: personOutline },
    { to: '/tech', icon: settingsOutline },
    { to: '/contact', icon: mailOutline },
    { to: '/video', icon: videocamOutline },
    { to: '/keys', icon: keyOutline },
    { to: '/hobbies', icon: gameControllerOutline },
    { to: '/gallery', icon: cameraOutline },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === '/';

  // Définition des positions animées
  const menuVariants = {
    home: {
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
      transition: {
        duration: 0.8,
        // ease: [0.68, -0.55, 0.27, 1.55] // Bézier incurvé
      }
    },
    page: {
      top: '0%',
      left: '90%',
      x: '-50%',
      y: '0%',
      transition: {
        duration: 0.8,
        // ease: [0.68, -0.55, 0.27, 1.55]
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="menu-wrapper"
        variants={menuVariants}
        animate={isHomePage ? 'home' : 'page'}
        initial={false}
        exit={false}
      >
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <div className={`toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <IonIcon icon={addOutline} />
          </div>

          {routes.map((route, index) => {
            const isActive = location.pathname === route.to;
            return (
              <li
                key={index}
                style={{ '--i': index }}
                className={isActive ? 'active' : ''}
                onClick={() => setIsOpen(false)} // ferme le menu au clic
              >
                <Link to={route.to}>
                  <IonIcon icon={route.icon} />
                </Link>
              </li>
            );
          })}

          <div className="indicator"></div>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
