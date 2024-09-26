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
          <h2>ALL CLEARED!</h2>
        ) : gameOver ? (
          <h2>GAME OVER!</h2>
        ) : (
          <h2>LET'S PLAY</h2>
        )}
        <div style={{ gap: 30, marginBottom: 20, display: 'block' }}>
          <div style={inputWrapperStyle}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Points:</label>
            <input
              value={inputValue}
              onChange={handleInputChange}
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
            >
              Restart
            </button>
          ) : (
            <button
              onClick={handleGeneratePoints}
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