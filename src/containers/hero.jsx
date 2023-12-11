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
   justify-content: space-around;
   align-items: center;
   max-width: 1250px;
   margin: auto;
   height: calc(100vh - 74px);
   @media ${device.tablet} {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3.5rem;
   }
`;
const HeroContent = styled.div`
   display: flex;
   flex-direction: column;
`;
const HeroTitle = styled.h1`
   font-size: clamp(3.2rem, 5vw + 1rem, 6.2rem);
   font-family: 'Molesk';
   margin-left: 1.5rem;
   opacity: 0;
   animation: 0.25s ease-in-out 0.6s slidefromtop;
   animation-fill-mode: both;
   @media ${device.tablet} {
      margin-left: 0rem;
   }
`;
const HeroText = styled.p`
   font-size: clamp(0.5rem, 1vw + 0.5rem, 1.2rem);
   opacity: 0;
   animation: 0.25s ease-in-out 0.2s slidefromtop;
   animation-fill-mode: both;
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
      min-width: 60px;
      min-height: 60px;
   }
   @media ${device.tablet} {
      justify-content: center;
   }
   @media ${device.tablet} {
      img {
         min-height: 45px;
         min-width: 45px;
      }
   }
`;

export const socialinfos = [
   'www.linkedin.com/in/tristan-réguème-a0b1922a4',
   'https://github.com/trisregueme',
   'https://twitter.com/TristanRegueme',
   'https://discord.gg/pk5GM5BrXa',
];

export default function HeroBanner() {
   return (
      <HeroSection>
         <HeroContent>
            <HeroText>Hello there ! I'm -</HeroText>
            <HeroTitle>
               Tristan <br /> Réguème
            </HeroTitle>
            <HeroText>
               - French Font-end Developer, Aspiring Full-Stack Developer
            </HeroText>
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
