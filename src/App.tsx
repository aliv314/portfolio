
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  const project = {
    title: "PantryKeeper",
    icon: "",
    alt: "Pantry Keeper Icon",
    landing: "https://pantrykeeper.vercel.app/",
    github: "https://github.com/alv-314/pantrykeeper",
    description:"React web app aimed at tackling household foodwaste.",
}
  return (
    <>
    <main className='flex flex-col items-center py-8 px-4 bg-teal '>
      <About/>
      <Projects/>
      
    </main> 
    </>
  );
}

export default App;
