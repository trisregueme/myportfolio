import styled from 'styled-components';
import react from '../assets/react.webp';
import styledcomponents from '../assets/styledcomponents.webp';
import javascript from '../assets/javascript.webp';
import sass from '../assets/sass.webp';

export const SkillElement = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   margin-top: 0.6rem;
   img {
      width: 30px;
      height: 30px;
   }
`;

export default function Frontend() {
   return (
      <div>
         <h3>Front-end</h3>
         <ul>
            <SkillElement>
               <img src={react} />
               <p>React</p>
            </SkillElement>
            <SkillElement>
               <img src={styledcomponents} />
               <p>Styled-components</p>
            </SkillElement>
            <SkillElement>
               <img src={javascript} />
               <p>JavaScript</p>
            </SkillElement>
            <SkillElement>
               <img src={sass} />
               <p>SASS</p>
            </SkillElement>
         </ul>
      </div>
   );
}
