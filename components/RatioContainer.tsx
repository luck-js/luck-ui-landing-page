import React from "react";
import styled from "styled-components";
import {Box} from "./Box"
import {Flex} from "./Flex"


const RatioContainer: React.FunctionComponent<any> = ({
  children,
  ratio = "100%",
  padding = 0,
  ...props
}) => {
  const Container = styled(Box)`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    padding: ${padding};
    transform: translateY(-50%);
  `;

  const RatioKeeper = styled(Flex)`
    overflow: hidden;
    position: relative;
    height: 0;
    padding-top: ${ratio};
    width: 100%;
  `;

  return (
    <RatioKeeper {...props}>
      <Container>{children}</Container>
    </RatioKeeper>
  );
};

export default RatioContainer;
