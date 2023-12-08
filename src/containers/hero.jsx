import styled from 'styled-components';
import ProfilePicture from '../components/profilepicture';

const HeroSection = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 75px);
   margin: auto;
   max-width: 1080px;
   gap: 3rem;
`;

const HeroContent = styled.div`
   display: flex;
   flex-direction: column;
   h1 {
      font-size: clamp(5.2rem, 5vw + 1rem, 6.2rem);
      font-family: 'Molesk';
      margin-left: 1.5rem;
      animation: slidein 1s;
   }
   p {
      font-size: clamp(0.5rem, 5vw + 1rem, 1.2rem);
      animation: slidein 0.8s;
   }
`;

export default function Main() {
   return (
      <HeroSection>
         <HeroContent>
            <p>Hello there ! I'm -</p>
            <h1>
               Tristan <br /> Réguème
            </h1>
            <p>- French Fontend Developer</p>
         </HeroContent>
         <ProfilePicture />
      </HeroSection>
   );
}
