import React, { useState, MouseEvent, CSSProperties } from 'react';

type hexagonProps = {
  onMouseEnter?: (e: MouseEvent) => void,
  onMouseOver?: (e: MouseEvent) => void,
  onMouseLeave?: (e: MouseEvent) => void,
  onClick?: (e: MouseEvent) => void,
  onDragStart?: (e: MouseEvent) => void,
  onDragEnd?: (e: MouseEvent) => void,
  onDragOver?: (e: MouseEvent) => void,
  onDrop?: (e: MouseEvent) => void
}

function Hexagon(props: hexagonProps) {

  const [state, setstate] = useState({})

  const onMouseEnter = (e: MouseEvent) => {
    // console.log('onMouseEnter');
    if (props.onMouseEnter) {
      props.onMouseEnter(e);
    }
  }
  const onMouseOver = (e: MouseEvent) => {
    if (props.onMouseOver) {
      props.onMouseOver(e);
      // props.onMouseOver(e, this);
    }
  }
  const onMouseLeave = (e: MouseEvent) => {
    if (props.onMouseLeave) {
      props.onMouseLeave(e);
      // props.onMouseLeave(e, this);
    }
  }
  const onClick = (e: MouseEvent) => {
    console.log('onClick');
    console.log(state);
    if (props.onClick) {
      props.onClick(e);
      // props.onClick(e, this);
    }
  }
  const onDragStart = (e: MouseEvent) => {
    if (props.onDragStart) {
      props.onDragStart(e);
      // const targetProps = {
      //   ...state,
      //   data: props.data,
      //   fill: props.fill,
      //   className: props.className
      // };
      // e.dataTransfer.setData('hexagon', JSON.stringify(targetProps));
      // props.onDragStart(e, this);
    }
  }
  const onDragEnd = (e: MouseEvent) => {
    if (props.onDragEnd) {
      e.preventDefault();
      props.onDragEnd(e);
      // const success = (e.dataTransfer.dropEffect !== 'none');
      // props.onDragEnd(e, this, success);
    }
  }
  const onDragOver = (e: MouseEvent) => {
    if (props.onDragOver) {
      props.onDragOver(e);
      // props.onDragOver(e, this);
    }
  }
  const onDrop = (e: MouseEvent) => {
    if (props.onDrop) {
      e.preventDefault();
      props.onDrop(e);
      // const target = JSON.parse(e.dataTransfer.getData('hexagon'));
      // props.onDrop(e, this, target);
    }
  }

  return (
    <svg height="210" width="500">
      <g
        // className={classNames('hexagon-group', className)}
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
        <g className="hexagon">
          <polygon points="200,10 250,190 160,210" fill="lime" />
          {/* <polygon points={points} fill={fillId} style={cellStyle} />   */}
          {/* {props.children} */}
        </g>
      </g>
    </svg>
  );
}

export default Hexagon;
