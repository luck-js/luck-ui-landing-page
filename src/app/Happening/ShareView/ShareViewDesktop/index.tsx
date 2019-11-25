import React from 'react';
import styled from 'styled-components';
import { ShareViewProps } from '../index';
import { Theme } from '../../../../utils';
import {Box, CanonApp, Flex, NAVIGATION_DESKTOP_HEIGHT, NAVIGATION_HEIGHT} from '../../../../components';
import { ShareRow } from './ShareRow';
import { BubblesNarrowBackground } from '../../../BubblesNarrowBackground';
import media from '../../../../utils/media';

const Index = ({ happening, onCopy, ...props }: ShareViewProps) => {
  const handleOnCopy = (uniqueLink: string) => () => {
    onCopy(uniqueLink);
  };

  return (
    <Index.Container {...props}>
      <ContentContainer>
        <CanonApp
          pt={['xregular', 'xregular', 'large', 'large']}
          mb={['regular', 'regular', 'large', 'large']}
        >
          UDOSTĘPNIJ LINKI
        </CanonApp>
        {happening.participants.map(participant => (
          <ShareRow
            key={participant.uniqueLink}
            participant={participant}
            onCopy={handleOnCopy(participant.uniqueLink)}
          />
        ))}
      </ContentContainer>
      <Index.Background />
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  position: relative;
`;

export const ContentContainer = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  padding-bottom: ${NAVIGATION_HEIGHT + 10}px; 
  margin: 0 auto;
  max-width: 700px;
  color: ${Theme.colors.black};
  text-align: center;
     
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding-bottom: ${NAVIGATION_DESKTOP_HEIGHT + 10}px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

Index.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 137px;
  position: fixed;
`;

export default Index;
