import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Frontend from '../components/frontend';
import Design from '../components/design';
import Others from '../components/others';

export const PartSection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
const SkillsTitle = styled.h2`
   opacity: 0;
   animation: ${(props) =>
      props.isVisible ? '0.4s ease-in-out slidefrombottom' : 'none'};
   animation-fill-mode: forwards;
`;
const SkillsDiv = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 2rem;
   width: 100%;
`;
const SkillsContent = styled.div`
   display: flex;
   flex-direction: column;
   opacity: 0;
   animation: ${(props) =>
      props.isVisible ? '0.4s ease-in-out slidefrombottom' : 'none'};
   animation-fill-mode: forwards;
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
      <PartSection>
         <SkillsTitle
            ref={ref}
            isVisible={inView}
         >
            Skills
         </SkillsTitle>
         <SkillsDiv>
            <SkillsContent
               ref={ref}
               isVisible={inView}
            >
               <Frontend />
            </SkillsContent>
            <SkillsContent
               ref={ref}
               isVisible={inView}
            >
               <Design />
            </SkillsContent>
            <SkillsContent
               ref={ref}
               isVisible={inView}
            >
               <Others />
            </SkillsContent>
         </SkillsDiv>
      </PartSection>
   );
}
