
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contacts/Contacts'
function App() {
  return (
    <>
    <main className='flex flex-col items-center py-8 px-4 bg-teal '>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main> 
    </>
  );
}

export default App;
