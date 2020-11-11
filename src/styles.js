import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled(motion.main)`
  display: flex;
  flex-direction: column;

  gap: 20px;
  width: 100%;

  max-width: 500px;

  height: auto;
  max-height: 600px;

  transition: height 2 ease;

  margin: 30px;
  padding: 20px;

  border-radius: 4px;
  background: ${(props) => props.theme.colors.background};
`;

export const Header = styled.header`
  text-align: center;

  & p {
    margin-top: 3px;
    font-size: 0.9em;
    color: ${(props) => props.theme.colors.subtext};
    font-weight: 600;
  }
`;
