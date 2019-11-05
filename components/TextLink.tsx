import styled from "styled-components"
import {Theme} from "../utils"


export const TextLink = styled('a')`
  color: ${Theme.colors.darkGray};
  
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.5s;

  &:hover {
    text-decoration-color: ${Theme.colors.darkGray};
  }
`
