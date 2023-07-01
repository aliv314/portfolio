import React from 'react';
import logo from './logo.svg';
import { useRef } from 'react';

import AboutCard from './components/AboutCard/AboutCard';


function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)
  const contact = useRef (null)

  
  return (
    <>
    <main className='flex justify-center p-8 bg-teal h-full w-full px-4'>
      <section ref={aboutRef} className = "mb-8"> 
        <AboutCard></AboutCard>
      </section>
    </main> 
    </>
  );
}

export default App;
