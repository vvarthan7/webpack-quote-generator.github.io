import generateQuote from "./generateQuote";
import './styles/main.scss';
import bgimage from './assets/Landscape-Color.jpg';

const bgImg = document.getElementById('bgImg');

bgImg.src = bgimage;

const quoteBtn = document.getElementById('quoteBtn');
quoteBtn.addEventListener('click', generateQuote);

generateQuote();