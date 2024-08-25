import { useState } from 'react';
import './App.css';
import Header from './header';
import Hero from './hero';
// import RecentPosts from './recent-posts';
/* tslint:disable:no-unused-variable */
import MainPage from './main-page'; // Capitalize the component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <MainPage /> {/* Capitalize the component usage */}
    </>
  );
}

export default App;
