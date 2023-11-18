import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Box } from '../Box';
import { FunctionComponent } from '../../utils/function-component.interface';

interface ButtonWithIconComponent<P = { Icon: FunctionComponent }>
  extends FunctionComponent<P> {
  Button: FunctionComponent;
  Text: FunctionComponent;
  IconContainer: FunctionComponent;
}

export const ButtonWithIcon: ButtonWithIconComponent = ({ children, Icon, ...props }) => {
  return (
    <ButtonWithIcon.Button {...props}>
      <ButtonWithIcon.Text>{children}</ButtonWithIcon.Text>
      {Icon && (
        <ButtonWithIcon.IconContainer>
          <Icon />
        </ButtonWithIcon.IconContainer>
      )}
    </ButtonWithIcon.Button>
  );
};

ButtonWithIcon.Text = styled('span')`
  margin-left: 20px;
`;
ButtonWithIcon.Button = styled(Button)`
  position: relative;
  padding: 9px 40px 9px 20px;
`;
// @ts-ignore
ButtonWithIcon.IconContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translateY(10px) translateX(-15px);
`;
