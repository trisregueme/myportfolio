import figma from '../assets/figma.webp';
import canva from '../assets/canva.webp';
import { SkillElement } from './frontend';

export default function Design() {
   return (
      <div>
         <h3>Design</h3>
         <ul>
            <SkillElement>
               <img src={figma} />
               <p>Figma (beginner)</p>
            </SkillElement>
            <SkillElement>
               <img src={canva} />
               <p>Canva</p>
            </SkillElement>
         </ul>
      </div>
   );
}
