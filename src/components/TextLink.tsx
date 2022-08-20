import styled, { css } from 'styled-components';
import { Theme } from '../utils';
import { applyStyleModifiers, ModifierKeys, ModifiersConfig } from 'styled-components-modifiers';

const BUTTON_VARIANTS: ModifiersConfig = {
  // @ts-ignore
  darkGray: (props) => css`
    color: ${Theme.colors.darkGray};
    text-decoration-color: ${props.underline && Theme.colors.darkGray};

    &:hover {
      text-decoration-color: ${Theme.colors.darkGray};
      opacity: ${props.underline && 0.8};
    }
  `,
  // @ts-ignore
  black: (props) => css`
    color: ${Theme.colors.black};
    text-decoration-color: ${props.underline && Theme.colors.black};

    &:hover {
      text-decoration-color: ${Theme.colors.black};
      opacity: ${props.underline && 0.8};
    }
  `,
};

export const TextLink = styled('a')<{ modifiers?: ModifierKeys; underline?: boolean }>`
  color: ${Theme.colors.main};

  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s, opacity 0.5s;

  opacity: 1;

  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }

  ${applyStyleModifiers(BUTTON_VARIANTS)};
`;
