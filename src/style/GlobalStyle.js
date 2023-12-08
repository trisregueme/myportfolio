import { createGlobalStyle } from 'styled-components';
import MoleskFont from '../assets/fonts/molesk.ttf';
import JustusBold from '../assets/fonts/justus-bold.ttf';
import JustusOld from '../assets/fonts/justus-oldstyle.ttf';
import UdaraMalam from '../assets/fonts/udaramalam.otf';

const GlobalStyle = createGlobalStyle`
// Reset CSS
html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}Button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}button{all:initial}a{text-decoration:none}

// Application CSS
@font-face {
    font-family: 'Molesk' ;
    src: url(${MoleskFont}) format('truetype');
}
@font-face {
    font-family: 'JustusBold' ;
    src: url(${JustusBold}) format('truetype');
}
@font-face {
    font-family: 'JustusOld' ;
    src: url(${JustusOld}) format('truetype');
}
@font-face {
    font-family: 'UdaraMalam' ;
    src: url(${UdaraMalam}) format('opentype');
}
@keyframes slidein {
    0% {
        opacity: 0;
        transform: translateY(-25px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
@keyframes animloader {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
} 
html {
    background: radial-gradient(ellipse at top, #1c1c1c 0%, #101010 85%);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'JustusOld', Helvetica, Arial, sans-serif;
}
body {
    color: white;
}
#root{
    width: 100%;
}
#grid {
    width: 100%;
    height: 1px;
    box-shadow: 0px 0px #000000, 0px 3px #000000, 0px 6px #000000, /* ... */;
    &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        box-shadow: 0px 0px #000000, 3px 0px #000000, 6px 0px #000000, /* ... */;
    }
 }
`;

export default GlobalStyle;
