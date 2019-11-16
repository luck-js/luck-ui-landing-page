import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Canon } from '../../Typography';
import { Box } from '../../Box';
import { Theme } from '../../../utils';
import ShareButton from './ShareButton';
import { Flex } from '../../Flex';
import { Happening } from '../../../pages/app/happening/share';
import {ShareStatic} from "react-native"
import CopyToClipboard from 'react-copy-to-clipboard';

declare global {
  interface Navigator  extends ShareStatic {

  }
}

interface ShareViewProps {
  happening: Happening;
}

const Container = styled(Box)`
  height: calc(100% - 69px);
  padding: 0 ${Theme.space.small}px;
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
    if(window.navigator.share){
      window.navigator.share({url: `http://${window.location.host}/app/losuj?id=${uniqueLink}`})
    }
  };

  const [host, setHost] = useState()

  useEffect(()=> {
    setHost(window.location.host);
  },[])

  return (
    <Container>
      <Canon
        mt={['xregular', 'xregular', 'xregular', 'xregular']}
        mb={['regular', 'regular', 'regular', 'regular']}
      >
        UDOSTĘPNIJ LINKI
      </Canon>
      <ShareButtonsContainer>
        {happening.participants.map(participant => {
          const url = `https://${host}/app/losuj?id=${participant.uniqueLink}`;
          return (
            <CopyToClipboard text={url}>
              <ShareButton onClick={handleOnClick(url)}>
                {participant.name}
              </ShareButton>
            </CopyToClipboard>
          )
        })}
      </ShareButtonsContainer>
    </Container>
  );
};

export default ShareView;
