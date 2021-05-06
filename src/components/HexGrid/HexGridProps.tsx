import React from 'react';
import { Point } from '../../models/models';

export type HexGridSettings = {
  flat: boolean
  origin: Point
  size: Point
  spacing: number
}

export type HexGridProps = {
  // dimensions
  height?: string | number;
  width?: string | number;
  // classnames
  className?: string;
  // viewBox
  viewBox?: string;
  settings?: HexGridSettings;
  // child components
  children: React.ReactNode;
}