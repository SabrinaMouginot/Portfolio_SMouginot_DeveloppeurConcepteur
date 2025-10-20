import { useState } from "react";
import Menu from "../Components/Menu/Menu";
import "../Components/Menu/Menu.css";
import PageTransition from "../Components/PageTransition";
import Intro from "../Components/Intro/Intro";

const Home = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [shouldOpenMenu, setShouldOpenMenu] = useState(false);

  return (
    <PageTransition>
      <section>
        {/* Intro visible uniquement en début de page */}
        {!introFinished && (
          <Intro
            onIntroEnd={() => {
              setIntroFinished(true);
              setShouldOpenMenu(true); // indique au menu de s'ouvrir
            }}
          />
        )}

        {/* Menu toujours monté, mais s’ouvre automatiquement après l’intro */}
        <Menu shouldOpen={shouldOpenMenu} />
      </section>
    </PageTransition>
  );
};

export default Home;
