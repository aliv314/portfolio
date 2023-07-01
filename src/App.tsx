import { useRef } from 'react';

import AboutCard from './components/AboutCard/AboutCard';
import Dropown from './components/Dropdown/Dropdown';


function App() {
  
  return (
    <>
    <main className='flex flex-col items-center p-8 bg-teal h-full w-full px-4'>
      {/* About */}
      <section className = "mb-8"> 
        <AboutCard></AboutCard>
      </section>
      {/* Projects */}
      <section>
        {/* <Dropown title="Projects"></Dropown> */}
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
