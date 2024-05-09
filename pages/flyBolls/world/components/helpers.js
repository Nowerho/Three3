import { AxesHelper, GridHelper } from 'three';

function createAxesHelper() {
  const helper = new AxesHelper(1);
  helper.position.set(0, 0, 0);
  return helper;
}

function createGridHelper() {
  const helper = new GridHelper(10);
  return helper;
}

export { createAxesHelper, createGridHelper };