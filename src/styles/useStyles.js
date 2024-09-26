// useStyles.js
import { useCallback } from 'react';

export const useStyles = () => {
  const pointStyle = useCallback((selected, top, left, id, numPoints) => {
    const size = Math.max(30, 30 - Math.floor((id / numPoints) * 20));
    const topAdjusted = Math.min(Math.max(top, 5), 450 - size);
    const leftAdjusted = Math.min(Math.max(left, 5), 570 - size);

    return {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      backgroundColor: selected ? '#F44336' : '#FFF',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      top: `${topAdjusted}px`,
      left: `${leftAdjusted}px`,
      fontSize: '10px',
      fontWeight: 'bold',
      zIndex: 10000 - id, 
      transform: id > 100 ? 'translateY(-5px)' : 'none',
      transition: 'background-color 0.2s, transform 0.2s, box-shadow 0.2s',
      border: selected ? '2px solid #F44336' : '2px solid #252525',
    };
  }, []);

  const containerStyle = {
    paddingTop: 30,
    paddingBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const innerContainerStyle = {
    paddingLeft: 20,
    border: '1px solid #000000',
    width: 600,
  };

  const inputWrapperStyle = {
    display: 'flex',
  };

  const inputStyle = {
    padding: 5,
    fontSize: 16,
  };

  const buttonStyle = (backgroundColor) => ({
    padding: '10px 20px',
    fontSize: 16,
    backgroundColor: backgroundColor,
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  });

  const playAreaStyle = {
    position: 'relative',
    width: '580px',
    height: '455px',
    border: '1px solid #000000',
    overflow: 'hidden',
  };

  return {
    pointStyle,
    containerStyle,
    innerContainerStyle,
    inputWrapperStyle,
    inputStyle,
    buttonStyle,
    playAreaStyle,
  };
};
