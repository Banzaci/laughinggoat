import React from 'react';
import { Main } from './components/Components';
import Hero from './components/Hero';
import House from './components/house.jpg';

function Home() {
  return (
    <Main>
       <Hero src={ House } />
    </Main>
  );
}
export default Home;
