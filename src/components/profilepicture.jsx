import styled from 'styled-components';
import tristan from '../assets/tristan.webp';
import { device } from '../style/breakpoints';

const ItsMe = styled.div`
   opacity: 0;
   animation: 0.25s ease-in 0.6s slidefromtop;
   animation-fill-mode: forwards;
   margin-top: 1.2rem;
   p {
      text-align: center;
      font-size: 1.2rem;
      opacity: 0;
      transition: opacity 0.8s;
   }
   &:hover {
      p {
         opacity: 1;
      }
   }
`;
const ImgWrapper = styled.div`
   max-height: 32vh;
   width: auto;
   aspect-ratio: 1/1;
   overflow: hidden;
   border-radius: 50%;
   border: 4px inset #000;
   img {
      height: 100%;
      width: 100%;
      filter: grayscale(100%) contrast(100%);
      transition: filter 0.5s;
      &:hover {
         filter: grayscale(0%) contrast(115%);
      }
   }
   @media ${device.tablet} {
      max-height: 40vh;
   }
`;

export default function ProfilePicture() {
   return (
      <ItsMe>
         <ImgWrapper>
            <img
               src={tristan}
               alt='tristan regueme'
            />
         </ImgWrapper>
         <p>Yes, it's me ! 👋</p>
      </ItsMe>
   );
}
