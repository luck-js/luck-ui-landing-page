import * as React from 'react';
import styled from 'styled-components';
import { Flex, BaseInput, Button } from '../../components';
import media from '../../utils/media';
import * as Theme from '../../utils/theme';
import Link from 'next/link';
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
  padding-right: calc(109px + 15px);

  &::placeholder {
    color: ${Theme.colors.gray};
  }

  ${media.greaterThan('desktop')`
    font-size: 17px;
    padding: 12px 20px;
    padding-right: calc(140px + 15px);
  `}
`;

const InputWithButton = ({ href, ariaLabel, linkAs, ...props }: any) => {
  const [name, setName]= useState("")
  const handleOnChange = ({ target: { value } }: any) => {
    setName(value);
  };

  const getUrlWithNameParam = (url: string) => {
    return `${url}?name=${name}`;
  }
  return (
    <Container {...props}>
      <Input onChange={handleOnChange} value={name} placeholder={'Nazwa wydarzenia...'} {...Theme.textStyles.smallText} />
      <Link href={getUrlWithNameParam(href)} as={getUrlWithNameParam(linkAs)}>
        <InputWithButton.Button
          colorfull
          modifiers={['contrast']}
          href={getUrlWithNameParam(linkAs)}
          ariaLabel={ariaLabel}
          {...Theme.textStyles.smallText}
          onMouseDown={(e: any) => e.preventDefault()}
        >
          Utwórz
        </InputWithButton.Button>
      </Link>
    </Container>
  );
};

InputWithButton.Button = styled(Button).attrs({ as: 'a' })<any>`
  position: absolute;
  right: 0;
  width: 109px;

  margin: 0 auto;

  transition: border-color 0.5s, color 0.5s, background-color 0.5s, text-decoration-color 0.5s,
    box-shadow 0.5s;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.13);

  ${media.greaterThan('desktop')`
    width: 140px;
    font-size: 17px;
    padding: 12px 8px 12px;
  `}
`;

export default InputWithButton;
