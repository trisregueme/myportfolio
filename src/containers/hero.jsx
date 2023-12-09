import styled from 'styled-components';
import ProfilePicture from '../components/profilepicture';
import Social from '../components/social';
import discord from '../assets/discord.webp';
import twitter from '../assets/twitter.webp';
import github from '../assets/github.webp';
import linkedin from '../assets/linkedin.webp';
import { device } from '../style/breakpoints';

const HeroSection = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100vh - 75px);
   gap: 3rem;
   @media ${device.tablet} {
      flex-direction: column-reverse;
      gap: 1rem;
   }
`;

const HeroContent = styled.div`
   display: flex;
   flex-direction: column;
   h1 {
      font-size: clamp(3.2rem, 5vw + 1rem, 6.2rem);
      font-family: 'Molesk';
      margin-left: 1.5rem;
      opacity: 0;
      animation: 0.25s ease-in-out 0.6s slidefromtop;
      animation-fill-mode: forwards;
   }
   p {
      font-size: clamp(0.5rem, 5vw + 1rem, 1.2rem);
      opacity: 0;
      animation: 0.25s ease-in-out 0.2s slidefromtop;
      animation-fill-mode: forwards;
   }
   @media ${device.tablet} {
      text-align: center;
   }
`;

const SocialsPresenting = styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
   margin: 1.5rem 0 0 1.5rem;
   opacity: 0;
   animation: 0.25s ease-in-out 0.9s slidefromtop;
   animation-fill-mode: forwards;
   img {
      filter: grayscale(100%) contrast(100%);
      transition:
         filter 0.5s,
         transform 0.5s;
      height: 5vh;
      width: auto;
      &:hover {
         filter: grayscale(0%) contrast(115%);
         transform: scale(1.2);
         cursor: pointer;
      }
   }
   @media ${device.tablet} {
      justify-content: center;
   }
`;

const socialinfos = [
   'www.linkedin.com/in/tristan-réguème-a0b1922a4',
   'https://github.com/trisregueme',
   'https://twitter.com/TristanRegueme',
   'https://discord.gg/pk5GM5BrXa',
];

export default function HeroBanner() {
   return (
      <HeroSection>
         <HeroContent>
            <p>Hello there ! I'm -</p>
            <h1>
               Tristan <br /> Réguème
            </h1>
            <p>- French Font-end Developer, Aspiring Full-Stack Developer</p>
            <SocialsPresenting>
               <Social
                  href={socialinfos[0]}
                  logo={linkedin}
               />
               <Social
                  href={socialinfos[1]}
                  logo={github}
               />
               <Social
                  href={socialinfos[2]}
                  logo={twitter}
               />
               <Social
                  href={socialinfos[3]}
                  logo={discord}
               />
            </SocialsPresenting>
         </HeroContent>
         <ProfilePicture />
      </HeroSection>
   );
}
