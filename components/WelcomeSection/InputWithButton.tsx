import * as React from 'react';
import styled from 'styled-components';
import { Flex, BaseInput, BaseButton } from '../index';
import media from '../../utils/media';
import * as Theme from '../../utils/theme';
import {useState} from "react"

const Container = styled(Flex)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 316px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 421px;
  `}
`;
const Input = styled(BaseInput)`
  width: 100%;
  border-radius: 30px;

  border: 2px solid ${Theme.colors.main};
  font-weight: 700;
  letter-spacing: 0;
  color: ${Theme.colors.black};
  opacity: 0.98;
  background-color: ${Theme.colors.main};
  padding: 9px 20px;
  padding-right: calc(120px + 15px);
  
  &::placeholder {
    color: ${Theme.colors.gray};
  }

  ${media.greaterThan('desktop')`
    font-size: 17px;
    padding: 12px 20px;
  `}
`;

const Button = styled(BaseButton).attrs({ as: 'a' })<any>`
  padding: 9px 8px 9px;

  position: absolute;
  right: 0;
  width: 109px;
  border: 2px solid ${Theme.colors.main};
  font-weight: 700;
  letter-spacing: 0;

  //max-width: 240px;
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

  ${media.greaterThan('desktop')`
    width: 140px;
    font-size: 17px;
    padding: 12px 8px 12px;
  `}
  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }
`;

const InputWithButton = ({ href, ariaLabel, ...props }: any) => {
  const [name, setName]=useState<string>("")
  return (
    <Container {...props}>
      <Input onChange={(event) => setName(event.target.value)} placeholder={'Nazwa wydarzenia...'} {...Theme.textStyles.smallText} />
      <Button href={`${href}?name=${name}`} ariaLabel={ariaLabel} {...Theme.textStyles.smallText}>
        Utwórz
      </Button>
    </Container>
  );
};

export default InputWithButton;
