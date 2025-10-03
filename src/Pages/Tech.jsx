import ProjectCard from '../Components/ProjectCard';

const Tech = () => {
  const projects = [
    {
      title: 'Fisheye',
      description: 'Plateforme de photographes accessible.',
      link: 'https://github.com/SabrinaMouginot/Front-End-Fisheye',
    },
    {
      title: 'Billed',
      description: 'Solution SaaS pour les équipes RH.',
      link: 'https://github.com/SabrinaMouginot/Billed_P9',
    },
    {
      title: 'SportSee',
      description: 'Tableau de bord d’analytics sportif.',
      link: 'https://github.com/SabrinaMouginot/P12sportsee',
    },
    {
      title: 'HRnet',
      description: 'Migration d’un outil jQuery vers React.',
      link: 'https://github.com/SabrinaMouginot/hrnet_P14',
    },
    {
      title: 'Learn@Home',
      description: 'Gestion de projet avec méthode Agile.',
      link: '#', // ajouter plus tard si tu mets en ligne
    },
  ];

  return (
    <section>
      <h1>Page technique</h1>
      <p>Stack : Git, GitHub, JS, Design pattern, Accessibilité, React, Vite, Recharts, MUI, Redux, npm, tests, UML, Figma, etc.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Tech;
