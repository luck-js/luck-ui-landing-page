import * as React from 'react';
import styled from 'styled-components';
import { Flex } from '../../utils/Flex';
import media from '../../utils/media';
import * as Theme from '../../utils/Theme';
import {BaseInput} from "../../utils/Input"
import {BaseButton} from "../../utils/Button/BaseButton"

const Container = styled(Flex)`
  position: relative;
  max-width: 350px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  
  ${media.greaterThan('mobile')`
    max-width: 350px;
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 450px;
  `}
  
  ${media.greaterThan('desktop')`
  
    max-width: 500px;
  `}
`;
const Input = styled(BaseInput)`
  width: 100%;
  border-radius: 30px;

  border: 2px solid ${Theme.colors.main};
  font-weight: 500;
  letter-spacing: 0;
  color: ${Theme.colors.black};
  opacity: 0.98;
  background-color: ${Theme.colors.main};
  padding: 8px 20px;
  padding-right: calc(120px + 15px);
  
  
  ${media.greaterThan('tablet')`
    padding: 8px 30px;
    padding-right: calc(180px + 15px);
  `}
`;

const Button = styled(BaseButton).attrs({ as: 'a' })<any>`
  padding: 9px 8px 9px;

  position: absolute;
  right: 0;
  width: 120px;
  border: 2px solid ${Theme.colors.main};
  font-weight: 500;
  letter-spacing: 0;

  max-width: 240px;
  cursor: pointer;
  background-color: ${Theme.colors.mainContrast};

  color: ${Theme.colors.main};
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: transparent;
  border-radius: 30px;

  margin: 0 auto;

  transition: border-color 0.5s, color 0.5s, background-color 0.5s, text-decoration-color 0.5s,
    box-shadow 0.5s;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);
  
  
  ${media.greaterThan('tablet')`
    width: 180px;
  `}
  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }
`;

const InputWithButton = ({ href, ...props }: any) => {
  return (
    <Container {...props}>
      <Input placeholder={'Wpisz nazwę...'} {...Theme.textStyles.bodyText} />
      <Button href={href} {...Theme.textStyles.smallText}>Utwórz</Button>
    </Container>
  );
};

export default InputWithButton;
