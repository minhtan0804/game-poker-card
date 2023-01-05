import Images from '../../assets/Images';
import { CardImage, Wrapper } from './cardStyle';

const Card = ({ card }) => {
  const { id_card, value, suit } = card;
  return (
    <Wrapper>
      <CardImage src={Images.cards[`${suit + value}`]} />
    </Wrapper>
  );
};

export default Card;
