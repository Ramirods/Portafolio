import React, { useState } from "react";
import ButtonComponents from "../button";
import { Link } from "react-router-dom";


const LogicAnswer = (gameToUpdate) => {
  const [showModal, setShowModal] = useState(false);
  const [newGame, setNewGame] = useState({
    title: "",
    description: "",
    players: "",
    categories: "",
  });

  const handleClick = (operation) => {
    switch (operation) {
      case "EDITAR":
        console.log("EDITAR");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <Link to={"/update"} state={{ task: gameToUpdate }}>
          <ButtonComponents
            tipo="EDITAR"
            onClick={() => handleClick("EDITAR")}
            to={"/update"}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogicAnswer;
