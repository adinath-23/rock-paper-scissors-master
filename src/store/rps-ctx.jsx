import React, { useEffect, useState } from "react";

const RpsContext = React.createContext({
  playerPick: null,
  housePick: null,
  winner: "",
  handlePlayerPick: (pick) => {},
  reset: () => {},
  score: 0,
  showResult: false,
});

export const RpsContextProvider = (props) => {
  const [showResult, setShowResult] = useState(false);
  const [playerPick, setPlayerPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  const handlePlayerPick = (pick) => {
    const pickNo = Math.floor(Math.random() * 3);
    const picks = ["rock", "paper", "scissor"];
    setHousePick(picks[pickNo]);
    setPlayerPick(pick);
    setShowResult(true);
  };
  useEffect(() => {
    if (playerPick !== null || housePick !== null) {
      if (
        (playerPick === "rock" && housePick === "scissor") ||
        (playerPick === "paper" && housePick === "rock") ||
        (playerPick === "scissor" && housePick === "paper")
      ) {
        setWinner("player");
        setScore((pre) => (pre += 1));
      } else if (playerPick === housePick) {
        setWinner("draw");
      } else {
        setWinner("house");
        setScore((pre) => (pre -= 1));
      }
    }
  }, [playerPick, housePick]);

  const reset = () => {
    setHousePick(null);
    setPlayerPick(null);
    setShowResult(false);
  };

  const contextValue = {
    housePick: housePick,
    winner: winner,
    playerPick: playerPick,
    reset: reset,
    handlePlayerPick: handlePlayerPick,
    score: score,
    showResult: showResult,
  };

  return (
    <RpsContext.Provider value={contextValue}>
      {props.children}
    </RpsContext.Provider>
  );
};

export default RpsContext;
