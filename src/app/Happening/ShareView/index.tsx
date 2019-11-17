import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useComponentSize from "@rehooks/component-size"
import CopyToClipboard from 'react-copy-to-clipboard';
import {ShareStatic} from "react-native"
import ShareButton from './ShareButton';
import {PublishedHappening} from "../model"
import { BubblesShadowBackground } from '../../BubblesShadowBackground';
import { Canon, Flex, Box, NAVIGATION_HEIGHT } from '../../../components';
import { Theme } from '../../../utils';

declare global {
  interface Navigator extends ShareStatic {}
}

export interface ShareViewData {
  happening: PublishedHappening;
}

interface ShareViewProps {
  data: ShareViewData;
}

const CONTAINER_BOTTOM_PADDING = 60

const Index = ({ data: { happening }}: ShareViewProps) => {
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
    <Index.Container>
      <Canon
        pt={['xregular', 'xregular', 'xregular', 'xregular']}
        mb={['regular', 'regular', 'regular', 'regular']}
      >
        UDOSTĘPNIJ LINKI
      </Canon>
      <Index.ShareButtonsContainer ref={containerRef}>
        {happening.participants.map(participant => {
          const url = `https://${host}/app/losuj?id=${participant.uniqueLink}`;
          return (
            <CopyToClipboard text={url}>
              <ShareButton onClick={handleOnClick(url)}>{participant.name}</ShareButton>
            </CopyToClipboard>
          );
        })}
      </Index.ShareButtonsContainer>
      <Index.Background shouldShow={shouldShowBackground}/>
    </Index.Container>
  );
};

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

Index.Container = styled(Box)`
  padding: 0 ${Theme.space.small}px calc(${CONTAINER_BOTTOM_PADDING}px) ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

Index.Background = styled(BubblesShadowBackground)<{shouldShow: boolean}>`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 103px;
  position: fixed;
  opacity: ${props => props.shouldShow ? 1 : 0};
  transition: 0.5s opacity;
`;

export default Index;
