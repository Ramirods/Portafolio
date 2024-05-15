import React, { useState } from "react";
import styled from "styled-components";

const ColumnaContainer = styled.div`
  background-color: green;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const ColumnaInfo = styled.p`
  margin: 8px 0;
`;

const Columna = ({
  id,
  propTitle,
  propDescription,
  propPlayers,
  propCategories,
  isEdit,
}) => {
  const [title, setTitle] = useState(propTitle);
  const [description, setDescription] = useState(propDescription);
  const [players, setPlayers] = useState(propPlayers);
  const [categories, setCategories] = useState(propCategories);

  return (
    <>
      <ColumnaContainer>
        <ColumnaTitle>
          {isEdit ? (
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
          ) : (
            title
          )}
        </ColumnaTitle>
        <ColumnaInfo>
          {isEdit ? (
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          ) : (
            description
          )}
        </ColumnaInfo>
        <ColumnaInfo>
          Players:{" "}
          {isEdit ? (
            <input
              onChange={(e) => setPlayers(e.target.value)}
              value={players}
            />
          ) : (
            players
          )}
        </ColumnaInfo>
        <ColumnaInfo>
          Categories:{" "}
          {isEdit ? (
            <input
              onChange={(e) => setCategories(e.target.value)}
              value={categories}
            />
          ) : (
            categories
          )}
        </ColumnaInfo>
      </ColumnaContainer>
      {isEdit && (
        <button
          onClick={() =>
            updateGame(id, title, description, players, categories)
          }
        >
          Modificar
        </button>
      )}
    </>
  );
};

const updateGame = async (gameId, title, description, players, categories) => {
  let game = {
    id: gameId,
    title: title,
    description: description,
    players: players,
    categories: categories,
  };
  let url = "http://localhost:3000/api/games/${gameId}";
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });
    if (response.ok) {
    } else {
      console.error("Ocurrió un error al actualizar el juego");
      return null;
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
    return null;
  }
};

export default Columna;
