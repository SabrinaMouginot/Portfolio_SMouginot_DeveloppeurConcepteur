import { useState, useCallback  } from "react";
import Menu from "../Components/Menu/Menu";
import "../Components/Menu/Menu.css";
import PageTransition from "../Components/PageTransition";
import Intro from "../Components/Intro/Intro";

const Home = () => {
  // const [introFinished, setIntroFinished] = useState(false); // pour garder l'intro visible
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false); // pour ouverture automatique
  const [showIntro, setShowIntro] = useState(true); // pour garder l'intro visible

  // Appelé quand le texte est fini d’écrire → le menu s’ouvre
  const handleIntroEnd = useCallback(() => {
    setShouldOpenMenu(true);
  }, []);

  // Appelé quand on clique sur la croix → l’intro disparaît
  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  return (
    <PageTransition>
      {/* <section> */}
      {/* Intro visible uniquement en début de page */}
      {/* {!introFinished && (
          <Intro
            onIntroEnd={() => {
              setIntroFinished(true);
              setShouldOpenMenu(true); // indique au menu de s'ouvrir
            }}
          />
        )} */}

      {/* Menu toujours monté, mais s’ouvre automatiquement après l’intro */}
      {/* <Menu shouldOpen={shouldOpenMenu} />
      </section> */}
      <section>
        {showIntro && <Intro onIntroEnd={handleIntroEnd} />}
        <Menu shouldOpen={shouldOpenMenu} onToggle={handleCloseIntro} />
      </section>
    </PageTransition>
  );
};

export default Home;
