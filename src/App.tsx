import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';

import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import AboutCard from './components/AboutCard/AboutCard';
import SkillsCard from './components/SkillsCard/SkillsCard';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)

  const aboutTitle = `Hi I'm Alejandro!`
  const aboutText  = `I’m a recent computer science and software engineering bootcamp graduate with a passion for problem solving and optimizing software solutions. Given my academic background, I’m committed to continuously expanding my knowledge and excel in fast-paced environments with high expectations.`
  
  return (
    <>
    <Navbar aboutRef = {aboutRef} projectsRef = {projectsRef} skillsRef = {skillsRef} blogRef = {blogRef} />
    <header className='bg-teal'>
      <Hero/>
    </header>
    <main className='p-8 bg-teal h-full w-full'>
      <section ref={aboutRef} className = "mb-8"> 
        <AboutCard title={aboutTitle} about={aboutText} ></AboutCard>
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
