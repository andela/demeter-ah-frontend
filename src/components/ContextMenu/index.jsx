/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const ContextMenu = ({ LoadMenu, children }) => {
  const initialContextState = {
    visible: false,
    x: 0,
    y: 0
  };

  const [contextState, setContextState] = useState(initialContextState);

  const handleContextMenu = (e) => {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;
    setContextState({
      visible: true,
      x: clickX,
      y: clickY
    });
  };

  const MenuStyle = {
    position: 'fixed',
    top: `${contextState.y - 35}px`,
    left: `${contextState.x + 10}px`,
    zIndex: 144
  };

  const handleClick = () => {
    setContextState({
      visible: false,
      x: 0,
      y: 0
    });
  };

  return (
    <div>
      <div onMouseUp={handleContextMenu}>
        {children}
      </div>
      {
        contextState.visible ? (
          <div onClick={handleClick} style={MenuStyle}>
            {LoadMenu}
          </div>
        ) : ''
      }
    </div>
  );
};

export default ContextMenu;
