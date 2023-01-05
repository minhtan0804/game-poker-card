import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
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

export const UserCardWImage = styled.img`
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
`;

export const OpenCardButton = styled.button`
  margin: auto;
  margin-left: 2rem;
  border: none;
  outline: none;
  color: white;
  background-color: ${(props) => props.bg};
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const GameMoney = styled(motion.div)`
  position: absolute;
  left: ${(props) => (props.position === 'center-top' ? '-2rem' : '6rem')};
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
