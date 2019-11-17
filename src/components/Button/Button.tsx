import styled, { css } from 'styled-components';
import { applyStyleModifiers, ModifierKeys, ModifiersConfig } from 'styled-components-modifiers';
import { BaseButton } from './BaseButton';
import * as Theme from '../../utils/theme';
import { TextStyle } from '../../utils';

interface ButtonProps extends TextStyle {
  modifiers?: ModifierKeys;
  href?: string;
  ariaLabel?: string;
  colorfull?: boolean;
}

const BUTTON_VARIANTS: ModifiersConfig = {
  black: () => css`
    color: ${Theme.colors.black};

    &:hover {
      text-decoration-color: ${Theme.colors.black};
    }
  `,
};

export const Button = styled(BaseButton)<ButtonProps>`
  //width: auto;
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  background-color: ${props => (props.colorfull ? Theme.colors.mainContrast : 'transparent')};

  color: ${Theme.colors.main};
  border: 2px solid ${props => (props.colorfull ? Theme.colors.main : 'transparent')};

  padding: 9px 20px 9px;

  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s, background-color 0.5s, color 0.5s, opacity 0.5s, border-color 0.5s;

  border-radius: 30px;

  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }
  
  :disabled{
    cursor: not-allowed;
    background-color: transparent;
    color: ${props => (props.colorfull ? Theme.colors.mainContrast : Theme.colors.main)};
    border: 2px solid ${props => (props.colorfull ? Theme.colors.mainContrast : 'transparent')};
    opacity: 0.8;
  }

  ${applyStyleModifiers(BUTTON_VARIANTS)};
`;

Button.defaultProps = {
  ...Theme.textStyles.bodyText,
};
