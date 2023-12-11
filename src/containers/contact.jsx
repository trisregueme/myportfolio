import { PartSection } from './skills';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { socialinfos } from './hero';
import Social from '../components/social';
import twitter from '../assets/twitter.webp';
import github from '../assets/github.webp';
import linkedin from '../assets/linkedin.webp';
import email from '../assets/email.webp';
import { device } from '../style/breakpoints';
import '../style/animation.css';

const ContactDiv = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2.5rem;
   p {
      font-size: 1rem;
      text-align: center;
   }
`;
const ButtonDiv = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 1rem;
   img {
      min-width: 60px;
      min-height: 60px;
   }
   img:last-child {
      min-width: 70px;
      min-height: 70px;
      @media ${device.mobile} {
         min-width: 55px;
         min-height: 55px;
      }
   }
`;

export default function Contact() {
   const [ref, inView] = useInView({
      triggerOnce: false,
   });
   return (
      <PartSection
         ref={ref}
         className={inView ? 'animate' : ''}
         id='contact'
      >
         <h2>Contact me</h2>
         <ContactDiv>
            <p>You can easily reach me using any of theses buttons 👇</p>
            <ButtonDiv>
               <Social
                  href={socialinfos[1]}
                  logo={github}
               />
               <Social
                  href={socialinfos[2]}
                  logo={twitter}
               />
               <Social
                  href={socialinfos[0]}
                  logo={linkedin}
               />
               <Social
                  href='mailto:reguemedev@gmail.com'
                  logo={email}
               />
            </ButtonDiv>
         </ContactDiv>
      </PartSection>
   );
}
