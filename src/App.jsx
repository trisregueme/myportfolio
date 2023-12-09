import React, { useEffect, useState } from 'react';
import Loader from './components/loader';
import styled from 'styled-components';
import Header from './containers/header';
import Footer from './containers/footer';
import HeroBanner from './containers/hero';
import Skills from './containers/skills';
import Projects from './containers/projects';
import Aboutme from './containers/aboutme';
import Contact from './containers/contact';

const Main = styled.main`
   display: flex;
   flex-direction: column;
   gap: 7rem;
   padding: 0 1rem;
   max-width: 1080px;
   margin: auto;
`;

function App() {
   const [isLoading, setisLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => setisLoading(false), 750);
   }, []);

   if (isLoading) {
      return <Loader />;
   }
   return (
      <>
         <Header />
         <HeroBanner />
         <Main>
            <Skills />
            <Projects />
            <Aboutme />
            <Contact />
         </Main>
         <Footer />
      </>
   );
}

export default App;
