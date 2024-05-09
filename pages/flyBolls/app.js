import { World } from './world/world.js';

function main() {
    // Получаем контейнер
    const container = document.querySelector('#scene-container');
    // Создаем мир и передаем в него контейнер
    const world = new World(container);
  
    // Стартуем рендер
    world.start();
  }
  
  main();