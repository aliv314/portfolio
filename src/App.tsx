import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)
  
  return (
    <>
    <Navbar aboutRef = {aboutRef} projectsRef = {projectsRef} skillsRef = {skillsRef} blogRef = {blogRef} />
    <main className='pt-12 bg-teal h-full w-full'>
      <section  ref={aboutRef} className ="py-4"> 
        About 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
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
