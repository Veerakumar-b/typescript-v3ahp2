// Import stylesheets
import './style.css';

import { Dot } from './Triangle';

let point1 = new Dot(3.5, 2);

console.dir('point1');

import { Line } from './Triangle';

let line1 = new Line(point1, point1);

console.dir(line1);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
