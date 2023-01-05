import Images from '../../assets/Images';
import Card from '../card/Card';
import {
  AvatarImage,
  AvatarWrapper,
  GameMoney,
  GamePoint,
  InfoWrapper,
  ListCardWrapper,
  Money,
  NameUser,
  OpenCardButton,
  Wrapper,
} from './userStyle';

import { AnimatePresence } from 'framer-motion';

const pointVariants = {
  hide: {
    opacity: 0,
    y: 20,
    display: 'none',
  },
  show: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 1,
    },
  },
};
const moneyBetsVariants = {
  hide: {
    opacity: 0,
    y: 20,
    display: 'none',
  },
  show: {
    opacity: 1,
    y: -20,
    transition: {
      duration: 1,
    },
  },
};

const User = ({ user, isStartGame, isFlipCards, handleFlipCards }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <NameUser>{user.userName}</NameUser>

        <AvatarWrapper>
          <AvatarImage src={user.avatar} alt={user.name} />
        </AvatarWrapper>

        <Money>{user.money}$</Money>
      </InfoWrapper>
      <AnimatePresence>
        <ListCardWrapper>
          {isFlipCards ? (
            <>
              {user.cards.map((card, index) => {
                return <Card key={index} card={card} />;
              })}

              {user.gameMoney >= 0 ? (
                <GameMoney
                  position={user.position}
                  variants={moneyBetsVariants}
                  animate={isFlipCards ? 'show' : 'hide'}
                >
                  +{user.gameMoney}$
                </GameMoney>
              ) : (
                <GameMoney
                  position={user.position}
                  variants={moneyBetsVariants}
                  animate={isFlipCards ? 'show' : 'hide'}
                >
                  {user.gameMoney}$
                </GameMoney>
              )}

              <GamePoint
                position={user.position}
                variants={pointVariants}
                animate={isFlipCards ? 'show' : 'hide'}
              >
                {user.point} point
              </GamePoint>
            </>
          ) : (
            <div
              style={{
                width: '320px',
                height: '10px',
              }}
            ></div>
          )}
        </ListCardWrapper>
      </AnimatePresence>

      <OpenCardButton bg='#fe2008' onClick={handleFlipCards}>
        Mở bài
      </OpenCardButton>
    </Wrapper>
  );
};

export default User;
