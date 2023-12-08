//import React, { useEffect, useState } from 'react';
//import Loader from './components/loader';
import styled from 'styled-components';
import Header from './containers/header';
import Footer from './containers/footer';
import HeroBanner from './containers/hero';

const Main = styled.main`
   padding: 0 1rem;
`;

function App() {
   /*
   const [isLoading, setisLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => setisLoading(false), 0);
   }, []);

   if (isLoading) {
      return <Loader />;
   }
   */
   return (
      <>
         <Header />
         <Main>
            <HeroBanner />
         </Main>
         <Footer />
      </>
   );
}

export default App;
