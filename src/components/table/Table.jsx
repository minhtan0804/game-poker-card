import {
  BackCardAnimate,
  BackCardImage,
  DeckOfCardWrapper,
  EndGame,
  InfoGame,
  TableWrapper,
} from './tableStyle';
import Images from '../../assets/Images';
import { Button } from '@mui/material';

const Table = ({
  bets,
  isStartGame,
  handleStartGame,
  isFlipCards,
  handleRestartGame,
}) => {
  const initialState = { x: 8, y: -8, display: 'none' };
  const variants1 = {
    initial: initialState,
    end: { x: -530, y: 150, transition: { duration: 1, delay: 0.25 } },
  };
  const variants2 = {
    initial: initialState,
    end: { x: -530, y: -140, transition: { duration: 1, delay: 0.5 } },
  };
  const variants3 = {
    initial: initialState,
    end: { x: 6, y: -205, transition: { duration: 1, delay: 0.75 } },
  };
  const variants4 = {
    initial: initialState,
    end: { x: 530, y: -140, transition: { duration: 1, delay: 1 } },
  };
  const variants5 = {
    initial: initialState,
    end: { x: 530, y: 150, transition: { duration: 1, delay: 1.25 } },
  };
  const variants6 = {
    initial: initialState,
    end: { x: -140, y: 307, transition: { duration: 1, delay: 1.5 } },
  };
  const variants7 = {
    // variants1
    initial: initialState,
    end: { x: -530, y: 150, transition: { duration: 1, delay: 1.75 } },
  };
  const variants8 = {
    // variants2
    initial: initialState,
    end: { x: -530, y: -140, transition: { duration: 1, delay: 2 } },
  };
  const variants9 = {
    // variants3
    initial: initialState,
    end: { x: 6, y: -205, transition: { duration: 1, delay: 2.25 } },
  };
  const variants10 = {
    // variants4
    initial: initialState,
    end: { x: 530, y: -140, transition: { duration: 1, delay: 2.5 } },
  };
  const variants11 = {
    // variants5
    initial: initialState,
    end: { x: 530, y: 150, transition: { duration: 1, delay: 2.75 } },
  };
  const variants12 = {
    // variants6
    initial: initialState,
    end: { x: -25, y: 307, transition: { duration: 1, delay: 3 } },
  };
  const variants13 = {
    // variants1
    initial: initialState,
    end: { x: -530, y: 150, transition: { duration: 1, delay: 3.25 } },
  };
  const variants14 = {
    // variants2
    initial: initialState,
    end: { x: -530, y: -140, transition: { duration: 1, delay: 3.5 } },
  };
  const variants15 = {
    // variants3
    initial: initialState,
    end: { x: 6, y: -205, transition: { duration: 1, delay: 3.75 } },
  };
  const variants16 = {
    // variants4
    initial: initialState,
    end: { x: 530, y: -140, transition: { duration: 1, delay: 4 } },
  };
  const variants17 = {
    // variants5
    initial: initialState,
    end: { x: 530, y: 150, transition: { duration: 1, delay: 4.25 } },
  };
  const variants18 = {
    // variants6
    initial: initialState,
    end: { x: 83, y: 307, transition: { duration: 1, delay: 4.5 } },
  };

  return (
    <TableWrapper>
      {!isStartGame ? (
        <Button
          variant='contained'
          color='primary'
          onClick={handleStartGame}
          style={{
            zIndex: 100,
            position: 'absolute',
            placeItems: 'center',
          }}
        >
          New game
        </Button>
      ) : (
        <div></div>
      )}

      {isFlipCards && isStartGame ? (
        <EndGame>
          <Button
            variant='contained'
            color='primary'
            style={{
              width: '115px',
            }}
            onClick={handleRestartGame}
          >
            Play Again
          </Button>

          <Button
            variant='contained'
            color='primary'
            style={{
              width: '115px',
            }}
            onClick={handleRestartGame}
          >
            Quit
          </Button>
        </EndGame>
      ) : (
        <div></div>
      )}

      <InfoGame>
        <div>Mức cược : </div>
        <div>{bets}</div>
      </InfoGame>

      <DeckOfCardWrapper>
        <BackCardImage src={Images.backCard} index={0} />
        <BackCardImage src={Images.backCard} index={1} />
        <BackCardImage src={Images.backCard} index={2} />

        <>
          <BackCardAnimate
            src={Images.backCard}
            variants={variants1}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants2}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants3}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants4}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants5}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants6}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants7}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants8}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants9}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants10}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants11}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants12}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants13}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants14}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants15}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants16}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants17}
            animate={!isStartGame ? 'initial' : 'end'}
          />
          <BackCardAnimate
            src={Images.backCard}
            variants={variants18}
            animate={!isStartGame ? 'initial' : 'end'}
          />
        </>
        {/* )} */}
      </DeckOfCardWrapper>
    </TableWrapper>
  );
};

export default Table;
