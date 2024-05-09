import { HemisphereLight } from "three";

function createLights(){
  const light = new HemisphereLight(
    '#fff8ba', // bright sky color
    '#000000', // dim ground color
    2, // intensity
  );
  return light;
}
export { createLights }