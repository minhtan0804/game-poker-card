import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    switch (props.position) {
      case 'left-top':
        return css`
          top: 35%;
          left: 15%;
          transform: translateY(-50%);
        `;

      case 'right-top':
        return css`
          top: 35%;
          right: 15%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case 'left-bottom':
        return css`
          bottom: 20%;
          left: 15%;
          transform: translateY(-50%);
        `;
      case 'right-bottom':
        return css`
          bottom: 20%;
          right: 15%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case 'center-top':
        return css`
          top: 8%;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: column;
        `;
      case 'center-bottom':
        return css`
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: column-reverse;
        `;
      default:
        break;
    }
  }}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NameUser = styled.div`
  color: white;
  font-weight: 700;
  text-transform: capitalize;
`;

export const AvatarWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Money = styled.div`
  font-weight: 700;
  text-transform: capitalize;
  color: white;
`;

export const ComputerCardWImage = styled.img`
  height: 8rem;
  width: 6rem;
  border-radius: 4px;
  cursor: pointer;
`;

export const ListCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const GameMoney = styled(motion.div)`
  position: absolute;
  left: ${(props) => (props.position === 'center-top' ? '0rem' : '6rem')};
  top: ${(props) => (props.position === 'center-top' ? '2rem' : '-4rem')};
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

export const GamePoint = styled(motion.div)`
  position: absolute;
  left: 15rem;
  top: ${(props) => (props.position === 'center-top' ? '2rem' : '-4rem')};
  color: yellow;
  font-size: 24px;
  font-weight: bold;
`;