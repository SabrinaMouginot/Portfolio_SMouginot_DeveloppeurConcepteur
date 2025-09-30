import { useState } from 'react';
import './Menu.css';
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

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const icons = [
    homeOutline,
    personOutline,
    settingsOutline,
    mailOutline,
    videocamOutline,
    keyOutline,
    gameControllerOutline,
    cameraOutline,
  ];

  return (
    <ul className={`menu ${isActive ? 'active' : ''}`}>
      <div className={`toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <IonIcon icon={addOutline} />
      </div>
      {icons.map((icon, index) => (
        <li
          key={index}
          style={{ '--i': index }}
          className={index === activeIndex ? 'active' : ''}
          onClick={() => handleItemClick(index)}
        >
          <a href="#">
            <IonIcon icon={icon} />
          </a>
        </li>
      ))}
      <div className="indicator"></div>
    </ul>
  );
};

export default Menu;
