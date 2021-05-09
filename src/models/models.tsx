export class HexCoordinates {
  // we use axial coordinates by default, so the important coordinates are x, and y
  // we also add in a z coordinate to create have a cube coordinate system as well
  // this allows us to use algorithms which are simpler for cube coordinates rather
  // than axial coordinates (the cube coordinates are under the hood here i.e. the
  // user cannot set the z coordinate manually, prevents them from messing this up)
  x: number;
  y: number;
  z: number
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
    this.z = -x - y;
  }
}

export type Point = {
  x: number;
  y: number;
}

export type Orientation = {
  f0: number;
  f1: number;
  f2: number;
  f3: number;
  b0: number;
  b1: number;
  b2: number;
  b3: number;
  angle: number;
}