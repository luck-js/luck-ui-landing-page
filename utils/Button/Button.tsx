import styled from 'styled-components';
import { BaseButton } from './BaseButton';
import * as Theme from '../Theme';

export const Button = styled(BaseButton)<any>`
  padding: 9px 8px 9px;

  right: 0;
  font-weight: 500;
  letter-spacing: 0;
  cursor: pointer;
  background-color: transparent;

  color: ${Theme.colors.main};
  text-align: center;
  

  margin: 0 auto;
  border: none;
  
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s;
  
  &:hover {
    text-decoration-color: ${Theme.colors.main};
  }
`;

Button.defaultProps = {
  ...Theme.textStyles.bodyText
}
