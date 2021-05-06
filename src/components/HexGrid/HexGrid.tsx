import React from 'react';
import { HexGridSettings, HexGridProps } from './HexGridProps';
import { Orientation, Point } from '../../models/models'

const LAYOUT_FLAT = {
  f0: 3.0 / 2.0,
  f1: 0.0,
  f2: Math.sqrt(3.0) / 2.0,
  f3: Math.sqrt(3.0),
  b0: 2.0 / 3.0,
  b1: 0.0,
  b2: - 1.0 / 3.0,
  b3: Math.sqrt(3.0) / 3.0,
  angle: 0.0
} as Orientation

const LAYOUT_POINT = {
  f0: Math.sqrt(3.0),
  f1: Math.sqrt(3.0) / 2.0,
  f2: 0.0,
  f3: 3.0 / 2.0,
  b0: Math.sqrt(3.0) / 3.0, 
  b1: - 1.0 / 3.0,
  b2: 0.0,
  b3: 2.0 / 3.0,
  angle: 0.5
} as Orientation

const defaultSettings = {
  flat: true,
  origin: {
    x: 0,
    y: 0
  } as Point,
  size: {
    x: 10,
    y: 10
  } as Point,
  spacing: 1
} as HexGridSettings

function HexGrid({ height = 600, width = 800, viewBox = "-50 -50 100 100", children = null, settings = defaultSettings }: HexGridProps) {
  
  const getChildContext = () => {
    const orientation = (settings.flat) ? LAYOUT_FLAT : LAYOUT_POINT;
    const cornerCoords = calculateCoordinates(orientation);
    const points = cornerCoords.map(point => `${point.x},${point.y}`).join(' ');
    const childLayout = Object.assign({}, settings, { orientation });

    return {
      layout: childLayout,
      points
    };
  }

  const getPointOffset = (corner: number, orientation: Orientation) => {
    let angle = 2.0 * Math.PI * (corner + orientation.angle) / 6;
    return { x: settings.size.x * Math.cos(angle), y: settings.size.y * Math.sin(angle) } as Point
  }

  const calculateCoordinates = (orientation: Orientation) => {
    const corners: Point[] = [];
    const center = {x: 0, y: 0} as Point;

    Array.from(new Array(6), (x, i) => {
      const offset = getPointOffset(i, orientation);
      const point = {x: center.x + offset.x, y: center.y + offset.y} as Point;
      corners.push(point);
    });

    return corners;
  }

  return (
    <svg className="grid" height={height} width={width} viewBox={viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  )
}

export default HexGrid;