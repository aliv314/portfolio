
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
    <main className='flex flex-col items-center py-8 px-4 bg-teal '>
      <About/>
      <Projects/>
      <Experience/>
      
    </main> 
    </>
  );
}

export default App;
