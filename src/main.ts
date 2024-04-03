import './style.css';
import { setup } from './app';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="background"></div>
`;

setup();
