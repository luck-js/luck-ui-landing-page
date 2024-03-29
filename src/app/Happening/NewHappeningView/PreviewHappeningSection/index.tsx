import React from 'react';
import {Box, Button, ButtonWithIcon, SpinnerFadingCircle} from '../../../../components';
import { useNewHappeningFlow } from '../NewHappeningContext';
import { CanonApp, InputApp, Trafalgar } from '../../../../components/Typography';
import styled from 'styled-components';
import { Theme } from '../../../../utils';
import ParticipantElementList from './ParticipantElementList';
import { ButtonContainer, ContentContainer, SectionBackground } from '../SectionLayout';
import ErrorModal from '../ErrorModal';
import { FunctionComponent } from '../../../../utils/function-component.interface';

interface PreviewHappeningSectionData {}

interface PreviewHappeningSectionProps extends PreviewHappeningSectionData {}

interface PreviewHappeningSectionPage<P = PreviewHappeningSectionProps>
  extends FunctionComponent<P> {
  Container: any;
  ContentContainer: any;
  ButtonContainer: any;
  Background: any;
  Button: any;
  ButtonWithIcon: any;
}

const Index: PreviewHappeningSectionPage = () => {
  const { state, backToEdit, publishHappening, readPublishHappeningError } = useNewHappeningFlow();

  const handleOnClickBack = () => backToEdit();

  const handleOnClickPublishHappening = () => !state.isLoading && publishHappening();

  const handleErrorModalClose = () => {
    readPublishHappeningError()
  }
  const handleErrorModalMainButtonClick = () => {
    publishHappening()
  }

  return (
    <Index.Container>
      <Index.ContentContainer>
        <CanonApp pt={['xregular', 'xregular', 'large', 'large']}>TWOJE WYDARZENIE</CanonApp>
        {state.happening.name && (<Trafalgar mt={['medium', 'medium', 'medium', 'medium']}>
          {state.happening.name}
        </Trafalgar>)}
        {state.happening.description && (<InputApp mt={['xsmall', 'xsmall', 'xsmall', 'xsmall']}>
          {state.happening.description}
        </InputApp>)}
        <CanonApp mt={['xregular', 'xregular', 'xregular', 'xregular']}>UCZESTNICY</CanonApp>
        <ParticipantElementList
          mt={['medium', 'medium', 'medium', 'medium']}
          names={state.happening.participants.map(({ name }) => name)}
        />
      </Index.ContentContainer>
      <Index.ButtonContainer>
        <Index.Background />

        <Index.ButtonWithIcon
          colorfull
          modifiers={['contrast']}
          onMouseDown={(e: any) => e.preventDefault()}
          onClick={handleOnClickPublishHappening}
          Icon={state.isLoading ? SpinnerFadingCircle : null}
          mb={['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
        >
          ZAPROŚ UCZESTNIKÓW
        </Index.ButtonWithIcon>
        <Index.Button
          modifiers={['black']}
          underline
          onMouseDown={(e: any) => e.preventDefault()}
          onClick={handleOnClickBack}
          disabled={state.isLoading}
        >
          Wróć do edycji wydarzenia
        </Index.Button>
      </Index.ButtonContainer>
      <ErrorModal shouldBeOpen={state.error != null} onClose={handleErrorModalClose} onMainButtonClick={handleErrorModalMainButtonClick} />
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  position: relative;
`;

Index.ContentContainer = ContentContainer;

Index.ButtonContainer = ButtonContainer;

Index.ButtonWithIcon = styled(ButtonWithIcon).attrs({ ...Theme.textStyles.smallText })<any>`
  width: 270px;  
  cursor: ${props => props.isLoading ? 'pointer' : 'initial'};
`;

Index.Button = styled(Button).attrs({ ...Theme.textStyles.smallText })`
  text-transform: initial;
  width: 270px;
`;

Index.Background = SectionBackground;

export default Index;
