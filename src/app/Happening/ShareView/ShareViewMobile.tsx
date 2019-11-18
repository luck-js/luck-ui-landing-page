import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ShareStatic } from 'react-native';
import ShareButton from './ShareButton';
import { BubblesShadowBackground } from '../../BubblesShadowBackground';
import { CanonApp, Flex, Box, NAVIGATION_HEIGHT } from '../../../components';
import { Theme } from '../../../utils';
import { ShareViewProps } from './index';

declare global {
  interface Navigator extends ShareStatic {}
}

const CONTAINER_BOTTOM_PADDING = 60;

const ShareViewMobile = ({ data: { happening }, ...props }: ShareViewProps) => {
  const handleOnClick = (uniqueLink: string) => () => {
    if (window.navigator.share) {
      window.navigator.share({ url: `https://${window.location.host}/app/losuj?id=${uniqueLink}` });
    }
  };

  let containerRef = useRef(null);
  let { height } = useComponentSize(containerRef);

  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  useEffect(() => {
    console.log(window.innerHeight, height + CONTAINER_BOTTOM_PADDING + NAVIGATION_HEIGHT);
    setShouldShowBackground(
      window.innerHeight < height + CONTAINER_BOTTOM_PADDING + NAVIGATION_HEIGHT,
    );
  }, [height]);
  return (
    <ShareViewMobile.Container {...props}>
      <CanonApp
        pt={['xregular', 'xregular', 'large', 'large']}
        mb={['regular', 'regular', 'large', 'large']}
      >
        UDOSTĘPNIJ LINKI
      </CanonApp>
      <ShareViewMobile.ShareButtonsContainer ref={containerRef}>
        {happening.participants.map(participant => (
          <CopyToClipboard text={participant.uniqueLink}>
            <ShareButton onClick={handleOnClick(participant.uniqueLink)}>
              {participant.name}
            </ShareButton>
          </CopyToClipboard>
        ))}
      </ShareViewMobile.ShareButtonsContainer>
      <ShareViewMobile.Background shouldShow={shouldShowBackground} />
    </ShareViewMobile.Container>
  );
};

ShareViewMobile.Container = styled(Box)`
  padding: 0 ${Theme.space.small}px calc(${CONTAINER_BOTTOM_PADDING}px) ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

ShareViewMobile.ShareButtonsContainer = styled(Flex)`
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

ShareViewMobile.Background = styled(BubblesShadowBackground)<{ shouldShow: boolean }>`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 103px;
  position: fixed;
  opacity: ${props => (props.shouldShow ? 1 : 0)};
  transition: 0.5s opacity;
`;

export default ShareViewMobile;
