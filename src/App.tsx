import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
function App() {
  // Order is About, Projects, Skills, Blog
  return (
    <>
    <Navbar/>
    <main className=' bg-teal py-12 h-full w-full'>
      <section id="About"> 
        About 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
      <section id="Projects"> 
        Projects 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
      <section id="Skills"> 
        Skills 
        <p>
        Pokem ipsum dolor sit amet Walrein Fraxure Zapdos Rayquaza Starly Klink. Volcano Badge surrender now or prepare to fight Escavalier Shroomish blast off at the speed of light Glaceon Zapdos. Thundershock Braviary Sand-Attack Grotle Pallet Town Scraggy Mienfoo. Rock Graveler Leech Seed Registeel Articuno Chingling Technical Machine. Fire Red Pokemon Vanillish Pichu Maractus Heatran Flaaffy.
        </p>
      </section>
      <section id="Blog"> Blog </section>
    </main> 
    </>
  );
}

export default App;
