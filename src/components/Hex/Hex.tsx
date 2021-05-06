import React, { useState } from 'react';
import HexProps from './HexProps'

function Hex(props: HexProps) {

  const [state, setstate] = useState({})

  const onMouseEnter = (e: React.MouseEvent) => {
    // console.log('onMouseEnter');
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  }
  const onMouseOver = (e: React.MouseEvent) => {
    if (props.onMouseOver) {
      props.onMouseOver(e);
      // props.onMouseOver(e, this);
    }
  }
  const onMouseLeave = (e: React.MouseEvent) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
      // props.onMouseLeave(e, this);
    }
  }
  const onClick = (e: React.MouseEvent) => {
    console.log('onClick');
    console.log(state);
    if (props.onClick) {
      props.onClick(e);
      // props.onClick(e, this);
    }
  }
  const onDragStart = (e: React.MouseEvent) => {
    if (props.onDragStart) {
      props.onDragStart(e);
      // const targetProps = {
      //   ...state,
      //   data: props.data,
      //   fill: props.fill,
      //   className: props.className
      // };
      // e.dataTransfer.setData('hex', JSON.stringify(targetProps));
      // props.onDragStart(e, this);
    }
  }
  const onDragEnd = (e: React.MouseEvent) => {
    if (props.onDragEnd) {
      e.preventDefault();
      props.onDragEnd(e);
      // const success = (e.dataTransfer.dropEffect !== 'none');
      // props.onDragEnd(e, this, success);
    }
  }
  const onDragOver = (e: React.MouseEvent) => {
    if (props.onDragOver) {
      props.onDragOver(e);
      // props.onDragOver(e, this);
    }
  }
  const onDrop = (e: React.MouseEvent) => {
    if (props.onDrop) {
      e.preventDefault();
      props.onDrop(e);
      // const target = JSON.parse(e.dataTransfer.getData('hex'));
      // props.onDrop(e, this, target);
    }
  }

  return (
    <g
      // className={classNames('hex-group', className)}
      // transform={`translate(${pixel.x}, ${pixel.y})`}
      // draggable="true"
      onMouseEnter={e => onMouseEnter(e)}
      onMouseOver={e => onMouseOver(e)}
      onMouseLeave={e => onMouseLeave(e)}
      onClick={e => onClick(e)}
      onDragStart={e => onDragStart(e)}
      onDragEnd={e => onDragEnd(e)}
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e)}
    >
      <g className="hex">
        <polygon points="0,0 250,190 160,210" fill="lime" />
        {/* <polygon points={points} fill={fillId} style={cellStyle} />   */}
        {props.children}
      </g>
    </g>
  );
}

export default Hex;
