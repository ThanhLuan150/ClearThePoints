import  { useState, useEffect, useCallback } from 'react';
const useClearThePoint = () => {
    const [points, setPoints] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [allCleared, setAllCleared] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [nextIdToSelect, setNextIdToSelect] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [finish, setFinish] = useState(false);
    
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const generatePoints = (numPoints) => {
      const newPoints = Array.from({ length: Math.min(numPoints, 1000) }, (_, index) => ({
        id: index + 1,
        selected: false,
        top: Math.random() * 450,
        left: Math.random() * 570,
      }));
      setPoints(newPoints);
      setAllCleared(false);
      setTimer(0);
      setIsTimerRunning(true);
      setNextIdToSelect(1);
      setGameOver(false);
      setFinish(true);
    };
    
    const handleGeneratePoints = () => {
      const numPoints = parseInt(inputValue, 10);
      if (isNaN(numPoints) || numPoints <= 0) {
        alert('Please enter a valid number');
        return;
      }
      generatePoints(numPoints);
    };
    
    const handleClearPoint = useCallback(
      (id) => {
        if (gameOver) return;
        if (id === nextIdToSelect) {
          setPoints((prevPoints) =>
            prevPoints.map((point) =>
              point.id === id ? { ...point, selected: true } : point
            )
          );
          setTimeout(() => {
            setPoints((prevPoints) => prevPoints.filter((point) => point.id !== id));
            setNextIdToSelect((prevId) => prevId + 1);
    
            if (points.length === 1) {
              setAllCleared(true);
              setIsTimerRunning(false);
            }
          }, 100);
        } else {
          setIsTimerRunning(false);
          setGameOver(true);
        }
      },
      [gameOver, nextIdToSelect, points.length]
    );
    
    const handleRestart = () => {
      const numPoints = parseInt(inputValue, 10);
      if (!isNaN(numPoints) && numPoints > 0) {
        generatePoints(numPoints);
      } else {
        setPoints([]);
        setInputValue('');
        setAllCleared(false);
        setTimer(0);
        setIsTimerRunning(false);
        setNextIdToSelect(1);
        setGameOver(false);
        setFinish(false);
      }
    };
    
    useEffect(() => {
      let interval;
      if (isTimerRunning) {
        interval = setInterval(() => {
          setTimer((prevTime) => prevTime + 1);
        }, 100);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isTimerRunning]);
    return {
        points,
        setPoints,
        inputValue,
        setInputValue,
        allCleared,
        setAllCleared,
        timer,
        setTimer,
        isTimerRunning,
        setIsTimerRunning,
        nextIdToSelect,
        setNextIdToSelect,
        gameOver,
        setGameOver,
        finish,
        setFinish,
        handleInputChange,
        generatePoints,
        handleGeneratePoints,
        handleClearPoint,
        handleRestart,
      };
    
}


export default useClearThePoint
