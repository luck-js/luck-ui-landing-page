import React from 'react';
import { Canon } from '../../Typography';
import styled from 'styled-components';
import { Box } from '../../Box';
import { Theme } from '../../../utils';
import {Happening} from "../../../pages/app/happening/share"

interface ShareViewProps {
  happening: Happening;
}

const Container = styled(Box)`
  height: calc(100% - 69px);
  ]padding: 0 ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

const ShareView = ({ happening }: ShareViewProps) => {
  return (
    <Container>
      <Canon
        mt={['xregular', 'xregular', 'xregular', 'xregular']}
        mb={['regular', 'regular', 'regular', 'regular']}
      >
        UDOSTĘPNIJ LINKI
      </Canon>
      {happening.participants.map(participant => <p>{participant.name}</p>)}
    </Container>
  );
};

export default ShareView;
