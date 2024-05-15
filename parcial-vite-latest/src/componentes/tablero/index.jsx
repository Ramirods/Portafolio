import React from 'react';
import styled from 'styled-components';
import Columna from '../column/index';
import LogicAnswer from '../logiButton';
    
const TableroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnaContainer = styled.div`
  width: 30%;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const Tablero = ({ games }) => {
  const menWomanGames = games.filter((games) => games.categories === "Men / Women");
  const weightGames = games.filter((games) => games.categories === "Men / Women, several divisions based on weight for both");
  const mixedGames = games.filter((games) => games.categories === "Men - Singles & Doubles / Women - Singles & Doubles / Mixed - Doubles");

  return (
    <TableroContainer>
      <ColumnaContainer>
        <ColumnaTitle>Men / Woman</ColumnaTitle>
        {menWomanGames.map((games) => (
          <>
          <Columna
            key={games.id}
            id={games.id}
            propTitle={games.title}
            propDescription={games.description}
            propPlayers={games.players}
            propCategories={games.categories}
            isEdit={false}
          />
          <LogicAnswer gameToUpdate={games} />
        </>
        ))}
      </ColumnaContainer>

      <ColumnaContainer>
        <ColumnaTitle>By Weight</ColumnaTitle>
        {weightGames.map((games) => (
          <>
          <Columna
            key={games.id}
            id={games.id}
            propTitle={games.title}
            propDescription={games.description}
            propPlayers={games.players}
            propCategories={games.categories}
            isEdit={false}
          />
          <LogicAnswer gameToUpdate={games}/>
        </>
        ))}
      </ColumnaContainer>
      <ColumnaContainer>
        <ColumnaTitle>Mixed</ColumnaTitle>
        {mixedGames.map((games) => (
          <>
            <Columna
              key={games.id}
              id={games.id}
              propTitle={games.title}
              propDescription={games.description}
              propPlayers={games.players}
              propCategories={games.categories}
              isEdit={false}
            />
            <LogicAnswer gameToUpdate={games}/>
          </>
        ))}
      </ColumnaContainer>
    </TableroContainer>
  );
};

export default Tablero;