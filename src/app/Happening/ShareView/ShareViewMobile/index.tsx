import React from 'react';
import styled from 'styled-components';
import { ShareStatic } from 'react-native';
import { BubblesNarrowBackground } from '../../../BubblesNarrowBackground';
import { CanonApp, Box } from '../../../../components';
import { Theme } from '../../../../utils';
import { ShareViewProps } from '../index';
import ShareElementList from './ShareElementList';

declare global {
  interface Navigator extends ShareStatic {}
}

const CONTAINER_BOTTOM_PADDING = 60;

const Index = ({ happening, onCopy, ...props }: ShareViewProps) => {
  const handleOnClick = (uniqueLink: string) => {
    if (window.navigator.share) {
      window.navigator.share({ url: uniqueLink }).then(() => onCopy(uniqueLink));
    } else {
      onCopy(uniqueLink);
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
      <ShareElementList participants={happening.participants} onClick={handleOnClick} />
      <Index.Background />
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  padding: 0 ${Theme.space.small}px calc(${CONTAINER_BOTTOM_PADDING}px) ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

Index.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  bottom: 0;
  left: 0;
  height: 103px;
  position: fixed;
`;

export default Index;
