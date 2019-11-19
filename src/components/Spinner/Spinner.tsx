import styled from "styled-components"
import {Theme} from "../../utils"

export const Spinner = styled('div')`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.main};
  border-radius: 100%;
  animation: PulseScaleOut 1.0s infinite ease-in-out;

  @keyframes PulseScaleOut {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }
`
