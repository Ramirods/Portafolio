import React, { useState, useEffect } from "react";
import Tablero from "../tablero";

const Dogis = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/games");
        const data = await response.json();
        setGames(data);
      } catch (error) {}
    };
    fetchGames();
  }, []);

  return (
    <div className="App">
      <Tablero games={games} />
    </div>
  );
};

export default Dogis;
