import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projList = projects.map(item => {
    console.log(item)
    return <ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies} />
  })
  console.log({projList})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projList}</div>
    </div>
  );
}

export default ProjectList;
