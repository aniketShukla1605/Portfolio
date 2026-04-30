import { useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "Quiz App",
        description: "Microservices-based quiz system",
      },
      {
        id: 2,
        title: "Plant Info App",
        description: "App to explore plant details",
      },
    ]);
    return (
      <section id="projects" className="px-6 py-20 bg-gray-100 bg-gray-900">

        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>

        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-r from-blue-100 to-blue-300 grid grid-cols-3 gap-4 p-6 rounded-xl">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }