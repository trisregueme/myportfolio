import styled from 'styled-components';
import tristan from '../assets/tristan.webp';

const ItsMe = styled.div`
   animation: slidein 1.2s;
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
   height: 32vh;
   width: auto;
   overflow: hidden;
   border-radius: 50%;
   border: 4px inset #000;
   img {
      height: 100%;
      width: 100%;
      filter: grayscale(100%) contrast(100%);
      transition: filter 0.8s;
      &:hover {
         filter: grayscale(0%) contrast(115%);
      }
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
