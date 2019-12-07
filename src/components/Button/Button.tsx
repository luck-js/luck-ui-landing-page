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
  black: props => css`
    color: ${Theme.colors.black};
    text-decoration-color: ${props.underline && Theme.colors.black};

    &:hover {
      text-decoration-color: ${Theme.colors.black};
      opacity: ${props.underline && 0.8};
    }
    
    :disabled {
      color: ${Theme.colors.black};
      text-decoration-color: ${props.underline && Theme.colors.black};
    }
  `,
  contrast: props => css`
    color: ${Theme.colors.main};
    background-color: ${props.colorfull ? Theme.colors.mainContrast : 'transparent'};
    border-color: ${props.colorfull ? Theme.colors.main : 'transparent'};

    &:hover {
      text-decoration-color: ${Theme.colors.main};
    }

    :disabled {
      color: ${props.colorfull ? Theme.colors.mainContrast : Theme.colors.main};
      border-color: ${props.colorfull ? Theme.colors.mainContrast : 'transparent'};
    }
  `,
};

export const Button = styled(BaseButton)<ButtonProps>`
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  background-color: ${props => (props.colorfull ? Theme.colors.main : 'transparent')};

  color: ${props => (props.colorfull ? Theme.colors.mainContrast : Theme.colors.main)};
  border: 2px solid ${props => (props.colorfull ? Theme.colors.mainContrast : 'transparent')};

  padding: 9px 20px 9px;

  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s, background-color 0.5s, color 0.5s, opacity 0.5s,
    border-color 0.5s;
    
  box-shadow: ${props => (props.colorfull ? '0px 1px 4px rgba(0, 0, 0, 0.1)' : 'none')};

  border-radius: 30px;

  &:hover {
    text-decoration-color: ${Theme.colors.mainContrast};
  }

  :disabled {
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
