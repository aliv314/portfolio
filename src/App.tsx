import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';

import Navbar from './components/NavBar/Navbar';
import AboutCard from './components/AboutCard/AboutCard';
import SkillsCard from './components/SkillsCard/SkillsCard';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)

  
  return (
    <>
    <main className='p-8 bg-teal h-full w-full px-4'>
      <section ref={aboutRef} className = "mb-8"> 
        <AboutCard></AboutCard>
      </section>
      <section ref = {projectsRef} className ="mb-8"> 
        <ProjectCard></ProjectCard>
      </section>
      <section ref = {skillsRef} className ="mb-8"> 
        Skills  
        <SkillsCard></SkillsCard>
      </section>
      {/* <section ref = {blogRef} className ="mb-8"> 
        Blog 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section> */}
    </main> 
    </>
  );
}

export default App;
