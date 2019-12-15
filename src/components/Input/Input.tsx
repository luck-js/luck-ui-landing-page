import styled from 'styled-components';
import { BaseInput } from './BaseInput';
import { Theme } from '../../utils';
import { Flex } from '../Flex';
import { Box } from '../Box';
import {useEffect, useState} from 'react';

export const Input = ({ id, label, onBlur, onFocus, type, refs, className, mt, ...otherProps }: any) => {
  const [isActive, setIsActive] = useState(otherProps.value.length !== 0);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (event: any) => {
    setIsFocus(true);
    setIsActive(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event: any) => {
    setIsFocus(false);
    setIsActive(event.target.value.length !== 0);
    if (onBlur) {
      onBlur(event);
    }
  };

  useEffect(() => {
    setIsActive(otherProps.value.length !== 0)
  },[otherProps.value.length])


  return (
    <Input.Container mt={mt} isFocus={isFocus}>
      <Input.Label className={className} htmlFor={id} isActive={isActive}>{label}</Input.Label>
      <Input.Input
        isActive={isActive}
        className={className}
        id={id}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={refs}
        type={type}
        {...otherProps}
      />
    </Input.Container>
  );
};

Input.Container = styled(Flex)<any>`
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  font-size: inherit;
  text-align: left;
  
  background-color: ${Theme.colors.darkMain};
  border-radius: 8px;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.05);

  font-weight: 600;
  padding: 9px 0 6px;
  border: 1px solid transparent;
  border-color: ${props => (props.isFocus ? Theme.colors.gray2 : "transparent")};
  transition: 0.5s border;
`;

Input.Label = styled(Box)<any>`
  padding: 0;
  margin: 9px 10px 6px;
  border: 0;
  position: absolute;
  color: ${Theme.colors.gray2};
  top: 0;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${props => (props.isActive ? 'translate3d(0, -150%, 0) scale(0.90)' : 'none')};
`;

Input.Input = styled(BaseInput)<any>`  
  margin: 0;
  border: none;
  padding: 0 10px 0;
  &::placeholder {
    color: ${Theme.colors.gray2};
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;

Input.defaultProps = {
  ...Theme.textStyles.inputApp,
};
