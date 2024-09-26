import React from 'react';
import { useStyles } from '../styles/useStyles';
import useClearThePoint from '../hooks/useClearThePoints';
const ClearThePointScreen = () => {
    const {
        pointStyle,
        containerStyle,
        innerContainerStyle,
        inputWrapperStyle,
        inputStyle,
        buttonStyle,
        playAreaStyle,
      } = useStyles();
  const {
    points,
    inputValue,
    allCleared,
    timer,
    gameOver,
    finish,
    handleInputChange,
    handleGeneratePoints,
    handleClearPoint,
    handleRestart,
  } = useClearThePoint()
  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {allCleared ? (
          <h2 style={{ color: '#4CAF50' }}>ALL CLEARED!</h2>
        ) : gameOver ? (
          <h2 style={{ color: '#F44336' }}>GAME OVER!</h2>
        ) : (
          <h2 style={{ color: '#3F51B5' }}>LET'S PLAY</h2>
        )}
        <div style={{ gap: 30, marginBottom: 20, display: 'block' }}>
          <div style={inputWrapperStyle}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Points:</label>
            <input
              value={inputValue}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div style={{ display: 'flex', gap: 30 }}>
            <p style={{ fontWeight: 'bold' }}>Time</p>
            <div style={{ paddingTop: 15 }}>{(timer / 10).toFixed(1)}s</div>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          {finish ? (
            <button
              onClick={handleRestart}
              style={buttonStyle('#FF5722')}
            >
              Restart
            </button>
          ) : (
            <button
              onClick={handleGeneratePoints}
              style={buttonStyle('#4CAF50')}
            >
              Play
            </button>
          )}
        </div>
        <div style={{ paddingBottom: 20 }}>
          <div style={playAreaStyle}>
            {points.map((point) => (
              <div
                key={point.id}
                style={pointStyle(point.selected, point.top, point.left, point.id, points.length)}
                onClick={() => handleClearPoint(point.id)}
              >
                {point.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearThePointScreen;