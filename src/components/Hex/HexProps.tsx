import React from 'react';
import { HexPos } from '../../models/models';

type HexProps = {
  // position
  pos: HexPos;
  // classnames
  className?: string;
  // other data
  data?: object;
  // styling
  fill?: string;
  cellStyle?: string | object;
  // mouseEvent handlers
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseOver?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  onDragStart?: (e: React.MouseEvent) => void;
  onDragEnd?: (e: React.MouseEvent) => void;
  onDragOver?: (e: React.MouseEvent) => void;
  onDrop?: (e: React.MouseEvent) => void;
  // child components
  children?: React.ReactNode;
}

export default HexProps;