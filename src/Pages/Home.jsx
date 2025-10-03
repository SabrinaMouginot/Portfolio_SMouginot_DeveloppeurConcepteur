import Menu from "../Components/Menu/Menu";
import "../Components/Menu/Menu.css";
import PageTransition from "../Components/PageTransition";

const Home = () => {
  return (

    <PageTransition>
      <section>
              <Menu />
        {/* <h1>Bienvenue sur mon portfolio</h1>
        <p>Explorez mes projets, compétences et passions !</p> */}
      </section>
    </PageTransition>
  )
};

export default Home;
