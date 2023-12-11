import { PartSection } from './skills';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import '../style/animation.css';
import ProjectCard from '../components/projectcard';
import { device } from '../style/breakpoints';

const ProjetDiv = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2.5rem;
   width: 100%;
   @media ${device.mobile} {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
   }
`;

export default function Projects() {
   const [ref, inView] = useInView({
      triggerOnce: false,
   });
   return (
      <PartSection
         ref={ref}
         className={inView ? 'animate' : ''}
         id='projects'
      >
         <h2>Selected Projects</h2>
         <ProjetDiv>
            <ProjectCard />
         </ProjetDiv>
      </PartSection>
   );
}
