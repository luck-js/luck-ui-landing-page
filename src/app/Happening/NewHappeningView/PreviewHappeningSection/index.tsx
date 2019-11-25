import React from 'react';
import { Flex } from '../../../../components';
import { useNewHappeningFlow } from '../NewHappeningContext';
import { CanonApp, InputApp, TrafalgarApp } from '../../../../components/Typography';
import styled from 'styled-components';
import { Theme } from '../../../../utils';
import media from '../../../../utils/media';
import ParticipantElementList from './ParticipantElementList';

interface PreviewHappeningSectionData {}

interface PreviewHappeningSectionProps extends PreviewHappeningSectionData {}

interface PreviewHappeningSectionPage<P = PreviewHappeningSectionProps>
  extends React.FunctionComponent<P> {
  Container: any;
}

const Index: PreviewHappeningSectionPage = () => {
  const { state } = useNewHappeningFlow();
  return (
    <Index.Container>
      <CanonApp pt={['xregular', 'xregular', 'large', 'large']}>TWOJE WYDARZENIE</CanonApp>
      <TrafalgarApp mt={['medium', 'medium', 'medium', 'medium']}>{state.name}</TrafalgarApp>
      <InputApp mt={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>{state.description}</InputApp>
      <CanonApp mt={['xregular', 'xregular', 'xregular', 'xregular']}>UCZESTNICY</CanonApp>
      <ParticipantElementList
        mt={['medium', 'medium', 'medium', 'medium']}
        names={state.participants.map(({ name }) => name)}
      />
    </Index.Container>
  );
};

Index.Container = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  padding: 0 ${Theme.space.small}px 0 ;
  margin: 0 auto;

  color: ${Theme.colors.black};
  text-align: center;
     
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 558px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

export default Index;
