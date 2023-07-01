import { useRef } from 'react';
import ProjectCard from './components/ProjectCard/ProjectCard';
import AboutCard from './components/AboutCard/AboutCard';

function App() {
  const project = {
    title: "PantryKeeper",
    icon: "",
    alt: "Pantry Keeper Icon",
    landing: "https://pantrykeeper.vercel.app/",
    github: "https://github.com/alv-314/pantrykeeper",
    description:"React web app aimed at tackling household foodwaste.",
}
  return (
    <>
    <main className='flex flex-col items-center p-8 bg-teal h-full w-full px-4'>
      {/* About */}
      <section className = "mb-4"> 
        <AboutCard></AboutCard>
      </section>
      {/* Projects */}
      <section>
        <ProjectCard 
          title={project.title} 
          description={project.description}></ProjectCard>
      </section>
      {/* Experience */}
      <section>
        
      </section>
      {/* Contact */}
      <section>

      </section>
    </main> 
    </>
  );
}

export default App;
