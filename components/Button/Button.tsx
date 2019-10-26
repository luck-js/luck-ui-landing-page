import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { BaseButton } from './BaseButton';
import * as Theme from '../../utils/theme';

const BUTTON_VARIANTS = {
  black: () => css`
    color: ${Theme.colors.black};
    
    &:hover {
      text-decoration-color: ${Theme.colors.black};
    }
  `,
};

export const Button = styled(BaseButton)<any>`
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  background-color: transparent;

  color: ${Theme.colors.main};
  text-align: center;
  border: none;

  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s;

  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }
  ${applyStyleModifiers(BUTTON_VARIANTS)};
`;

Button.defaultProps = {
  ...Theme.textStyles.bodyText,
};
