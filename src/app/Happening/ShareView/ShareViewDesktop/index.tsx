import React from 'react';
import styled from 'styled-components';
import {ShareViewProps} from '../index';
import {Theme} from '../../../../utils';
import {Box, CanonApp} from '../../../../components';
import {ShareRow} from "./ShareRow"
import {BubblesNarrowBackground} from "../../../BubblesNarrowBackground"

const Index = ({ data: { happening }, ...props }: ShareViewProps) => {
  return (
    <Index.Container {...props}>
      <CanonApp
        pt={['xregular', 'xregular', 'large', 'large']}
        mb={['regular', 'regular', 'large', 'large']}
      >
        UDOSTĘPNIJ LINKI
      </CanonApp>
      {happening.participants.map((participant) => (
        <ShareRow key={participant.uniqueLink} participant={participant} />
      ))}
      <Index.Background/>
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  margin: 0 auto;
  max-width: 700px;
  color: ${Theme.colors.black};
  text-align: center;
`;

Index.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 137px;
  position: fixed;
  transition: 0.5s opacity;
`;

export default Index;
