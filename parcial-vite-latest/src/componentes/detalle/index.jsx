import React, { useState } from "react";
import { useLocation } from "react-dom";
import ButtonComponents from "../button";
import { Link } from "react-router-dom";

const handleClick = (operation) => {
  console.log(operation);
};

const UpdateGame = () => {
  const location = useLocation();
  let { game } = location.state;
  return (
    <>
      <Columna
        id={game.gameToUpdate.id}
        propTitle={game.gameToUpdate.title}
        propDescription={game.gameToUpdate.description}
        propPlayers={game.gameToUpdate.players}
        propCategories={game.gameToUpdate.categories}
        isEdit={true}
      />
      <Link to={"/"}>
        <ButtonComponents tipo="VOLVER" onClick={() => handleClick("VOLVER")} />
      </Link>
    </>
  );
};

export default UpdateGame;
