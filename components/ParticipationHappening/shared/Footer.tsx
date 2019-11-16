import styled from "styled-components"
import {Box} from "../../Box"
import {Theme} from "../../../utils"
import {BubblesShadowBackground} from "../../BubblesShadowBackground"
import React from "react"

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
Footer.Background = styled(BubblesShadowBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
`;
