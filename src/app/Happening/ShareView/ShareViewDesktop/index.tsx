import React from 'react';
import styled from 'styled-components';
import {ShareViewProps} from '../index';
import {Theme} from '../../../../utils';
import {Box, CanonApp} from '../../../../components';
import {ShareRow} from "./ShareRow"

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
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  margin: 0 auto;
  max-width: 700px;
  color: ${Theme.colors.black};
  text-align: center;
`;

export default Index;
