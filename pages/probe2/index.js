import { World } from './world/world.js';

function main() {
  const container = document.querySelector('#container');
  const world = new World(container);
}
main();