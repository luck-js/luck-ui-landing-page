import React from "react"
import styled from "styled-components"
import {Box} from "../../Box"
import {Theme} from "../../../utils"
import {BodyText} from "../../Typography"
import {BaseButton} from "../../Button"

// @ts-ignore
import Close from "../../../static/close.svg"

interface IElement<P = any > extends React.FunctionComponent<P> {
  Container: any;
  Text: any;
  Button: any;
}

export const Element: IElement = ({value, onClose}: any) => {
  return (
    <Element.Container>
      <Element.Text>{value}</Element.Text>
      <Element.Button onClick={onClose} onMouseDown={(e: any) => e.preventDefault()}>
        <Close/>
      </Element.Button>
    </Element.Container>
  );
};

Element.Container = styled(Box)`
  position: relative;
  display: flex;
  flex: 0 0 calc(50% - 8px);
  border-radius: 8px;
  padding: 9px 40px 8px 10px;
  background-color: ${Theme.colors.mainContrast};
  color: ${Theme.colors.main};
  overflow: hidden;
`;

Element.Text = styled(BodyText)`
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
Element.Button = styled(BaseButton)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -7.5px;
  right: 15px;
  width: 15px;
  text-align: center;
  height: 15px;
  display: block;

  svg {
    height: 100%;
    width: auto;
    fill: ${Theme.colors.main};
  }
`;
