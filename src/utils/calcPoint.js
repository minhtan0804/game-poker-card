const userList = [
  {
    id: '1',
    userName: 'user 1',
    typeUser: 'computer',
    position: 'left-top',
    typePlayer: 'player',
    avatar:
      'https://images.unsplash.com/photo-1672627695765-af28a43d40ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    money: 10000,
    cards: [
      { id_card: '1', value: 7, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
  {
    id: '2',
    userName: 'user 2',
    typeUser: 'computer',
    position: 'right-top',
    typePlayer: 'player',
    avatar:
      'https://images.unsplash.com/photo-1672627798660-d0b3c2d7a691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    money: 10000,
    cards: [
      { id_card: '1', value: 7, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
  {
    id: '3',
    userName: 'user 3',
    typeUser: 'computer',
    position: 'left-bottom',
    typePlayer: 'player',
    avatar:
      'https://images.unsplash.com/photo-1672631285599-856e87dfd04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    money: 10000,
    cards: [
      { id_card: '1', value: 7, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
  {
    id: '4',
    userName: 'user 4',
    typeUser: 'computer',
    position: 'right-bottom',
    typePlayer: 'player',
    avatar:
      'https://plus.unsplash.com/premium_photo-1669040674572-836c64a3ac70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    money: 10000,
    cards: [
      { id_card: '1', value: 7, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
  {
    id: '5',
    userName: 'user 5',
    typeUser: 'computer',
    position: 'center-top',
    typePlayer: 'dealer',
    avatar:
      'https://images.unsplash.com/photo-1641805963238-a8d4717575d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    money: 10000,
    cards: [
      { id_card: '1', value: 2, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
  {
    id: '6',
    userName: 'user 6',
    typeUser: 'user',
    position: 'center-bottom',
    typePlayer: 'player',
    avatar:
      'https://plus.unsplash.com/premium_photo-1669673986444-3d8d63f74ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=600',
    money: 10000,
    cards: [
      { id_card: '1', value: 9, suit: 'S' },
      { id_card: '2', value: 8, suit: 'D' },
      { id_card: '3', value: 9, suit: 'C' },
    ],
    point: 0,
  },
];

const calcPoint = (listUser) => {
  const _listUser = [];
  for (let i = 0; i < listUser.length; i++) {
    const user = listUser[i];
    const point = user.cards.reduce((sum, card) => {
      if (card.value === 'A') {
        sum += 1;
      } else {
        sum += card.value;
      }
      return sum;
    }, 0);

    user.point = point % 10 === 0 ? 10 : point % 10;
    _listUser.push(user);
  }

  return _listUser;
};

const findWinner = (listUser, bets) => {
  const listUserTemp = calcPoint(listUser);
  const dealer = listUserTemp.find(({ typePlayer }) => typePlayer === 'dealer');

  // console.log(dealer);

  //   console.log(listUserTemp);
  const _listUser = [];

  for (let i = 0; i < listUserTemp.length; i++) {
    const user = listUserTemp[i];
    user.gameMoney = 0;
    //   console.log(_listUser);
    if (user.type === 'dealer') {
      _listUser.push(user);
    }
    if (user.point > dealer.point) {
      user.money += bets;
      dealer.money -= bets;

      user.gameMoney += bets;
      dealer.gameMoney -= bets;
    } else if (user.point < dealer.point) {
      dealer.money += bets;
      user.money -= bets;
      user.gameMoney -= bets;
      dealer.gameMoney += bets;
      if (dealer.point === 10) {
        dealer.money += bets;
        user.money -= bets;
        user.gameMoney -= bets;
        dealer.gameMoney += bets;
      }
    } else if (user.point === 10) {
      dealer.money -= bets;
      user.money += bets;
      user.gameMoney += bets;
      dealer.gameMoney -= bets;
    }

    _listUser.push(user);
  }

  return _listUser;
};

// console.log(findWinner(userList, 100));

export default findWinner;
