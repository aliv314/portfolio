import { useRef } from 'react';

import AboutCard from './components/AboutCard/AboutCard';


function App() {
  const aboutRef = useRef(null)
  
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
