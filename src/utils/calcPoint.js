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
