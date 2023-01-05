const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

export const getCards = () => {
  const suit = ['C', 'D', 'H', 'S'];
  const value = ['A', 2, 3, 4, 5, 6, 7, 8, 9];

  const listCard = [];

  while (listCard.length < 6) {
    const _listCard = listCard.flat();
    const cards = [];
    while (cards.length < 3) {
      const card = {
        value: value[getRandomIndex(9)],
        suit: suit[getRandomIndex(4)],
      };

      if (
        !_listCard.some(
          (element) =>
            element.value === card.value && element.suit === card.suit
        )
      ) {
        if (
          !cards.some(
            (item) => item.value === card.value && item.suit === card.suit
          )
        ) {
          cards.push(card);
        }
      }
    }
    listCard.push(cards);
  }
  return listCard;
};
