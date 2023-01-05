import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const TableWrapper = styled.div`
  height: 62vh;
  width: 60vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url(images/table.svg);
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  margin-right: 10rem;
  margin-top: 15rem;
`;

export const DeckOfCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 8rem;
  width: 6rem;
  transform: translate(-50%, -50%);
`;

export const BackCardImage = styled.img`
  height: 8rem;
  width: 6rem;
  position: absolute;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ${(props) => {
    switch (props.index) {
      case 0:
        return css`
          top: 0;
          left: 0;
        `;
      case 1:
        return css`
          top: -4px;
          left: 4px;
        `;
      case 2:
        return css`
          top: -8px;
          left: 8px;
        `;

      default:
        break;
    }
  }}
`;

export const BackCardAnimate = styled(motion.img)`
  box-shadow: none;
  height: 8rem;
  width: 6rem;
  position: absolute;
`;

export const EndGame = styled.div`
  position: absolute;
  width: 15rem;
  height: 6rem;
  z-index: 100;
  place-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
