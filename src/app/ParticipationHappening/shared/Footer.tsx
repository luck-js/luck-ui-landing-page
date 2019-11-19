import React from "react"
import styled from "styled-components"
import {BubblesNarrowBackground} from "../../BubblesNarrowBackground"
import {Box} from "../../../components"
import {Theme} from "../../../utils"

export const Footer = () => {
  return (
    <Footer.Container>
      <Footer.Background/>
    </Footer.Container>
  )
}

Footer.Container = styled(Box)`
  width: 100%;
  height: 103px;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: ${Theme.colors.main};
`
Footer.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
`;
