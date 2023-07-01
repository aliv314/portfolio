import { useRef } from 'react';

import AboutCard from './components/AboutCard/AboutCard';
import Dropown from './components/DropdownCard/DropdownCard';


function App() {
  
  return (
    <>
    <main className='flex flex-col justify-center p-8 bg-teal h-full w-full px-4'>
      {/* About */}
      <section className = "mb-4"> 
        <AboutCard></AboutCard>
      </section>
      {/* Projects */}
      <section>
        
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
