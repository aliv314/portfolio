import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import AboutCard from './components/AboutCard/AboutCard';
function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)
  
  return (
    <>
    <Navbar aboutRef = {aboutRef} projectsRef = {projectsRef} skillsRef = {skillsRef} blogRef = {blogRef} />
    <header className='bg-teal'>
      <Hero/>
    </header>
    <main className='pt-12 px-8 bg-teal h-full w-full'>
      <section ref={aboutRef} className ="py-4"> 
        <AboutCard title="About" about="This is the about section :D" ></AboutCard>
      </section>
      <section ref = {projectsRef} className ="py-4"> 
        Projects 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
      <section ref = {skillsRef} className ="py-4"> 
        Skills  
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
      <section ref = {blogRef} className ="py-4"> 
        Blog 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
    </main> 
    </>
  );
}

export default App;
