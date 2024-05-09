import { 
  Scene, 
  PerspectiveCamera,
  Color,
  WebGLRenderer, 
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PMREMGenerator,
  FloatType,
  MeshStandardMaterial
} from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import HdrFile from "./assets/old_room_2k.hdr";
// import { RGBELoader } from 'https://cdn.skypack.dev/three-stdlib@2.8.5/loaders/RGBELoader';

const scene = new Scene()
scene.background = new Color('#FFEECC');

const camera = new PerspectiveCamera( 45, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 0, 50);

const renderer = new WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);


let envmap;

(async function(){
  let pmrem = new PMREMGenerator(renderer);
  let envmapTexture = await new RGBELoader().setDataType(FloatType).loadAsync(HdrFile);
  envmap = pmrem.fromEquirectangular(envmapTexture).texture;

  let sphereMesh = new Mesh(
    new SphereGeometry(5, 100, 100),
    new MeshStandardMaterial({
      envMap: envmap,
      roughness: 0,
      metalness: 0.5,
    })
  );
  scene.add(sphereMesh);

  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
})();
