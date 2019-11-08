import styled from "styled-components"
import {BaseInput} from "./BaseInput"
import {Theme} from "../../utils"


export const Input = styled(BaseInput)<any>`
  background-color: ${Theme.colors.darkMain};
  border-radius: 8px;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.05);
  
  font-weight: 700;
  padding: 9px 10px 6px;
  border: 1px solid transparent;
  
  &::placeholder {
    color: ${Theme.colors.gray2};
  }
  
  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  ...Theme.textStyles.bodyText,
};
