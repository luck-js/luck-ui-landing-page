import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../../utils/Flex';

const Container = styled(Flex)`
  position: relative;
  max-width: 350px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
`;
const Input = styled('input')`
  width: 100%;
  border-radius: 30px;

  border: 2px solid #f9f9f9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
  color: #212121;
  opacity: 0.98;
  background-color: #f2f2f2;
  padding: 8px 15px;
  padding-right: calc(120px + 15px);
`;
const Button = styled('a')`
  padding: 9px 8px 8px;
  font-size: 12px;

  position: absolute;
  right: 0;
  width: 120px;
  border: 2px solid #f9f9f9;
  font-weight: 700;
  letter-spacing: 0;

  max-width: 240px;
  cursor: pointer;
  background-color: #d45858;

  color: #f9f9f9;
  text-align: center;
  text-transform: uppercase;

  border-radius: 30px;

  margin: 0 auto;

  transition: border-color 0.5s, color 0.5s, background-color 0.5s, text-decoration-color 0.5s,
    box-shadow 0.5s;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
`;

const InputWithButton = ({ href, ...props }: any) => {
  return (
    <Container {...props}>
      <Input placeholder={'Wpisz nazwę...'} />
      <Button href={href}> Utwórz </Button>
    </Container>
  );
};

export default InputWithButton;
