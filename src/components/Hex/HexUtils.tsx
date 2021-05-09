import { HexCoordinates, Orientation, Point } from "../../models/models"
import { HexGridSettings } from "../HexGrid/HexGridProps";

const HexUtils = {
  
  equals(posA: HexCoordinates, posB: HexCoordinates) {
    return posA.x === posB.x && posA.y === posB.y && posA.z === posB.z;
  },

  hexToPixel(pos: HexCoordinates, orientation: Orientation, settings: HexGridSettings) {
    const x = settings.origin.x + (orientation.f0 * pos.x + orientation.f1 * pos.y) * settings.size.x * settings.spacing;
    const y = settings.origin.y + (orientation.f2 * pos.x + orientation.f3 * pos.y) * settings.size.y * settings.spacing;
    return { x, y } as Point;
  },

  pixelToHex(point: Point, orientation: Orientation, settings: HexGridSettings) {
    const pt = {
      x: (point.x - settings.origin.x) / settings.size.x,
      y: (point.y - settings.origin.y) / settings.size.y
    } as Point
    const x = orientation.b0 * pt.x + orientation.b1 * pt.y;
    const y = orientation.b2 * pt.x + orientation.b3 * pt.y;
    return HexUtils.round(new HexCoordinates(x, y));
  },

  round(pos: HexCoordinates) {
    const roundX = Math.round(pos.x);
    const roundY = Math.round(pos.y);
    const roundZ = Math.round(pos.z);
    const xDiff = Math.abs(roundX - pos.x);
    const yDiff = Math.abs(roundY - pos.y);
    const zDiff = Math.abs(roundZ - pos.z);
    
    if (xDiff > yDiff && xDiff > zDiff) {
      return new HexCoordinates(-roundY - roundZ, roundY);
    } else if (yDiff > zDiff) {
      return new HexCoordinates(roundX, -roundX - roundZ);
    }
    return new HexCoordinates(roundX, roundY);
  }
}

export default HexUtils