import React from 'react';
import styled from 'styled-components';
import { ShareStatic } from 'react-native';
import ShareElement, {ShareButton} from './ShareElement';
import { BubblesNarrowBackground } from '../../../BubblesNarrowBackground';
import { CanonApp, Flex, Box, usePopup } from '../../../../components';
import { Theme } from '../../../../utils';
import { ShareViewProps } from '../index';

declare global {
  interface Navigator extends ShareStatic {}
}

const CONTAINER_BOTTOM_PADDING = 60;

const Index = ({ data: { happening }, ...props }: ShareViewProps) => {
  const { showPopup } = usePopup();

  const handleOnClick = (uniqueLink: string) => {
    if (window.navigator.share) {
      window.navigator.share({ url: uniqueLink });
    } else {
      showPopup('Skopiowano !');
    }
  };

  return (
    <Index.Container {...props}>
      <CanonApp
        pt={['xregular', 'xregular', 'large', 'large']}
        mb={['regular', 'regular', 'large', 'large']}
      >
        UDOSTĘPNIJ LINKI
      </CanonApp>
      <Index.ShareButtonsContainer>
        {happening.participants.map(participant => (
          <ShareElement key={participant.uniqueLink} participant={participant} onClick={handleOnClick}/>
        ))}
      </Index.ShareButtonsContainer>
      <Index.Background/>
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  padding: 0 ${Theme.space.small}px calc(${CONTAINER_BOTTOM_PADDING}px) ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

Index.ShareButtonsContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: self-start;

  ${ShareButton.Button} {
    width: calc(50% - ${Theme.space.xsmall}px);
    margin-bottom: ${Theme.space.small}px;
    &:nth-child(odd) {
      margin-right: ${Theme.space.xsmall}px;
    }

    &:nth-child(even) {
      margin-left: ${Theme.space.xsmall}px;
    }
  }
`;

Index.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 103px;
  position: fixed;
  transition: 0.5s opacity;
`;

export default Index;
