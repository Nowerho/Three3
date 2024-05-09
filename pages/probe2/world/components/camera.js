import { PerspectiveCamera, Euler } from "three";

function createCamera(){
  const fov = 35; 
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; 
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 10);
  const rot = new Euler(1,1,1);
  camera.tick = (delta) =>{
    // camera.rotation.z += 0.1;
  }
  return camera;
}
export { createCamera }