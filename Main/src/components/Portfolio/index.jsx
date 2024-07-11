import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'mySocialNetwork',
      description: 'MongoDB',
      link: "https://github.com/fhubert1/my-social-network",
      repo: "https://github.com/fhubert1/my-social-network"
    },
    {
      name: 'myTechBlog',
      description: 'CSS/JavaScript/Handlebars',
      link: "https://github.com/fhubert1/my-tech-blog",
      repo: "https://github.com/fhubert1/my-tech-blog"
    },
    {
      name: 'eCommerceBackEnd',
      description: 'Express/PostgresSQL',
      link: "https://github.com/fhubert1/e-commerce-back-end",
      repo: "https://github.com/fhubert1/e-commerce-back-end"
    },
    {
      name: 'svgLogoMaker',
      description: 'Node/Inquirer',
      link: "https://github.com/fhubert1/svg-logo-maker",
      repo: "https://github.com/fhubert1/svg-logo-maker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
