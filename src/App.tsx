import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
function App() {
  // Order is About, Projects, Skills, Blog
  return (
    <>
    <Navbar/>
    <main className='bg-teal h-full w-full'>
      <section> About </section>
      <section> Projects </section>
      <section> Skills </section>
      <section> Blog </section>
    </main> 
    </>
  );
}

export default App;
