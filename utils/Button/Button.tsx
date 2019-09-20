import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { BaseButton } from './BaseButton';
import * as Theme from '../Theme';

const BUTTON_VARIANTS = {
  black: () => css`
    &,
    & > a {
      color: ${Theme.colors.black};
    }

    &:hover {
      &, & > a {
        text-decoration-color: ${Theme.colors.black};
      }
    }
  `,
};

export const Button = styled(BaseButton)<any>`
  padding: 9px 8px 9px;
  &,
  & > a {
    font-weight: 500;
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
  }
`;

Button.defaultProps = {
  ...Theme.textStyles.bodyText,
};
