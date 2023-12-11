import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Frontend from '../components/frontend';
import Design from '../components/design';
import Others from '../components/others';
import { device } from '../style/breakpoints';
import '../style/animation.css';

export const PartSection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   opacity: 0;
`;
const SkillsDiv = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2.5rem;
   width: 100%;
   @media ${device.tablet} {
      justify-content: space-around;
      h3 {
         font-size: 1.3rem;
      }
      p {
         font-size: 0.9rem;
      }
      img {
         height: 25px;
         width: 25px;
      }
   }
`;
const SkillsContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
   h3 {
      margin-bottom: 0.5rem;
   }
`;
export default function Skills() {
   const [ref, inView] = useInView({
      triggerOnce: false,
   });
   return (
      <PartSection
         ref={ref}
         className={inView ? 'animate' : ''}
         id='skills'
      >
         <h2>Skills</h2>
         <SkillsDiv>
            <SkillsContent>
               <Frontend />
            </SkillsContent>
            <SkillsContent>
               <Design />
            </SkillsContent>
            <SkillsContent>
               <Others />
            </SkillsContent>
         </SkillsDiv>
      </PartSection>
   );
}
