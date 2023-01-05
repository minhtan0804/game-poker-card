import { useState } from 'react';
import Computer from '../../components/computer/Computer';
import Table from '../../components/table/Table';
import User from '../../components/user/User';
import { Menu, Wrapper } from './gameTableStyle';
import userList from '../../data/user';
import { getCards } from '../../utils/getCards';
import findWinner from '../../utils/calcPoint';

const GameTable = () => {
  // console.log(getCards().flat(Infinity));
  const bets = 100;
  const [listUser, setListUser] = useState(userList);
  const [isStartGame, setIsStartGame] = useState(false);
  const [isHandOutCards, setIsHandOutCards] = useState(false);
  const [isFlipCards, setIsFlipCards] = useState(false);
  // console.log(listCard);

  const handleStartGame = () => {
    setIsStartGame(true);

    if (isFlipCards) return;

    const listCard = getCards();

    const _listUser = listUser.map((user, index) => {
      user.cards = listCard[index];

      return user;
    });

    setListUser(_listUser);
  };

  const handleFlipCards = () => {
    if (!isStartGame) return;

    setIsFlipCards(true);

    const _listUser = findWinner(listUser, bets);
    console.log(_listUser);
    setListUser(_listUser);
  };

  const handleRestartGame = () => {
    setIsStartGame(false);
    setIsFlipCards(false);

  }

  return (
    <>
      <Wrapper>
        <Table
          bets={bets}
          isStartGame={isStartGame}
          handleStartGame={handleStartGame}
          isFlipCards={isFlipCards}
          handleRestartGame={handleRestartGame}
        />
        {listUser.map((user) => {
          if (user.typeUser === 'computer') {
            return (
              <Computer
                key={user.id}
                user={user}
                isStartGame={isStartGame}
                isFlipCards={isFlipCards}
              />
            );
          }
          return (
            <User
              key={user.id}
              user={user}
              isStartGame={isStartGame}
              isFlipCards={isFlipCards}
              handleFlipCards={handleFlipCards}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default GameTable;
