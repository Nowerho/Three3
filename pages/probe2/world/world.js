import {
  Color,
  Scene,
  WebGLRenderer,

} from 'three';
import { Loop } from './systems/Loop';
import { createCube } from './components/cube';
import { createCamera } from './components/camera';
import { createLights } from './components/lights';

class World {
  constructor(container) {
    const scene = new Scene();
    scene.background = new Color('#8B73BF');

    const camera = createCamera();
    const cube = createCube();
    const light = createLights();

    scene.add(cube, light);

    const renderer = new WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.render(scene, camera);
    container.append(renderer.domElement); // вот тут сложно, рендерер возврщает элемент канваса и мы его встраиваем в страницу

    const loop = new Loop(camera, scene, renderer);
    loop.updatables.push(cube, camera)

    loop.start();
  }
}
export { World }