import './style.css';
import { setup } from './app';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas>
  </canvas>
`;

setup();
