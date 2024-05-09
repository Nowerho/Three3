import { 
  BoxGeometry, 
  Mesh, 
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three"
function createCube(){
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial();
  const cube = new Mesh(geometry, material);
  cube.tick = (delta) => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
  };
  return cube;
}
export { createCube }