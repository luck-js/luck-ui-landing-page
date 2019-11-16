import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Canon } from '../../Typography';
import { Box } from '../../Box';
import { Theme } from '../../../utils';
import ShareButton from './ShareButton';
import { Flex } from '../../Flex';
import { Happening } from '../../../pages/app/happening/share';
import { ShareStatic } from 'react-native';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BubblesShadowBackground } from '../../BubblesShadowBackground';
import useComponentSize from "@rehooks/component-size"
import {NAVIGATION_HEIGHT} from "../../Navigation"

declare global {
  interface Navigator extends ShareStatic {}
}

interface ShareViewProps {
  happening: Happening;
}

const CONTAINER_BOTTOM_PADDING = 60

const Container = styled(Box)`
  padding: 0 ${Theme.space.small}px calc(${CONTAINER_BOTTOM_PADDING}px) ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

const ShareButtonsContainer = styled(Flex)`
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

const ShareView = ({ happening }: ShareViewProps) => {
  const handleOnClick = (uniqueLink: string) => () => {
    if (window.navigator.share) {
      window.navigator.share({ url: `http://${window.location.host}/app/losuj?id=${uniqueLink}` });
    }
  };

  const [host, setHost] = useState();

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  let containerRef = useRef(null);
  let { height } = useComponentSize(containerRef);

  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  useEffect(() => {
    console.log(window.innerHeight, height + CONTAINER_BOTTOM_PADDING + NAVIGATION_HEIGHT)
    setShouldShowBackground(window.innerHeight < height + CONTAINER_BOTTOM_PADDING + NAVIGATION_HEIGHT)
  },[height])
  return (
    <Container>
      <Canon
        pt={['xregular', 'xregular', 'xregular', 'xregular']}
        mb={['regular', 'regular', 'regular', 'regular']}
      >
        UDOSTĘPNIJ LINKI
      </Canon>
      <ShareButtonsContainer ref={containerRef}>
        {happening.participants.map(participant => {
          const url = `https://${host}/app/losuj?id=${participant.uniqueLink}`;
          return (
            <CopyToClipboard text={url}>
              <ShareButton onClick={handleOnClick(url)}>{participant.name}</ShareButton>
            </CopyToClipboard>
          );
        })}
      </ShareButtonsContainer>
      <ShareView.Background shouldShow={shouldShowBackground}/>
    </Container>
  );
};

ShareView.Background = styled(BubblesShadowBackground)<{shouldShow: boolean}>`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 103px;
  position: fixed;
  opacity: ${props => props.shouldShow ? 1 : 0};
  transition: 0.5s opacity;
`;

export default ShareView;
