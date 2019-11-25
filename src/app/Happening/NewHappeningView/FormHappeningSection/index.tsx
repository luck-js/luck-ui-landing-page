import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import TextareaAutosize from 'react-autosize-textarea';
import useComponentSize from '@rehooks/component-size';
import { Theme, usePrevious } from '../../../../utils';

import { InputWithButton } from '../InputWithButton';
import { BubblesNarrowBackground } from '../../../BubblesNarrowBackground';
import { NewParticipant } from '../../model';
import { apiAxios } from '../../../api.axios';
import {
  Box,
  ButtonWithIcon,
  CanonApp,
  Flex,
  Input,
  NAVIGATION_HEIGHT,
  SpinnerFadingCircle,
} from '../../../../components';
import media from '../../../../utils/media';
import { useNewHappeningFlow } from '../NewHappeningContext';
import NewParticipantElementList from './NewParticipantElementList';

interface FormHappeningSectionData {}

interface FormHappeningSectionProps extends FormHappeningSectionData {}

interface FormHappeningSectionPage<P = FormHappeningSectionProps>
  extends React.FunctionComponent<P> {
  Button: any;
  Background: any;
  Container: any;
  ContentContainer: any;
  ButtonContainer: any;
}

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop + NAVIGATION_HEIGHT);
};

const TEXTAREA_ROWS_NUMBERS = [5, 5, 7];

const Index: FormHappeningSectionPage = () => {
  const { state, setNewHappening } = useNewHappeningFlow();
  const previousParticipants = usePrevious<NewParticipant[]>(state.participants);

  const handleOnChangeTitle = ({ target: { value } }: any) => {
    setNewHappening({ ...state, name: value });
  };

  const handleOnChangeDescription = ({ target: { value } }: any) => {
    setNewHappening({ ...state, description: value });
  };

  const [participantName, setParticipantName] = useState<string>('');

  const handleOnChangeParticipantName = ({ target: { value } }: any) => {
    setParticipantName(value);
  };

  const handleOnEnterParticipantName = () => {
    if (isEmpty(participantName)) return;
    setNewHappening({
      ...state,
      participants: [...state.participants, { name: participantName }],
    });

    setParticipantName('');
  };

  const handleOnCloseParticipantName = (value: string) => {
    const participants = state.participants.filter(({ name }) => name !== value);
    setNewHappening({ ...state, participants });
  };

  const handleKeyPress = (e: any) => {
    if (e.charCode == 13) {
      handleOnEnterParticipantName();
    }
    if (e.keyCode == 13) {
      handleOnEnterParticipantName();
    }
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClickButton = () => {
    setIsLoading(true);
    apiAxios.post('/api/v1/published-happening', { state }).then(({ data }) => {
      Router.push({
        pathname: '/app/udostepnij-linki',
        query: { id: data.id },
      });
    });
  };

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    if (previousParticipants && previousParticipants.length < state.participants.length) {
      executeScroll();
    }
  }, [state.participants]);

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(state.participants.length > 2);
  }, [state.participants]);

  const [textareaRows, setTextareaRows] = useState<number>(5);

  let containerRef = useRef(null);
  let { width } = useComponentSize(containerRef);

  useEffect(() => {
    const breakpointIndex = Theme.breakpoints.findIndex(
      breakpoint => window.innerWidth < parseInt(breakpoint),
    );

    const textareaRowsNumber = TEXTAREA_ROWS_NUMBERS[breakpointIndex]
      ? TEXTAREA_ROWS_NUMBERS[breakpointIndex]
      : TEXTAREA_ROWS_NUMBERS[TEXTAREA_ROWS_NUMBERS.length - 1];
    setTextareaRows(textareaRowsNumber);
  }, [width]);

  return (
    <Index.Container ref={containerRef}>
      <Index.ContentContainer>
        <CanonApp
          pt={['xregular', 'xregular', 'large', 'large']}
          mb={['regular', 'regular', 'large', 'large']}
        >
          STWÓRZ WYDARZENIE
        </CanonApp>
        <Input
          type="text"
          label="Nazwa wydarzenia"
          value={state.name}
          onChange={handleOnChangeTitle}
        />
        <Input
          autosize
          mt={['xregular', 'xregular', 'xregular', 'xregular']}
          type="text"
          rows={textareaRows}
          as={TextareaAutosize}
          value={state.description}
          onChange={handleOnChangeDescription}
          label="Opis wydarzenia"
        />
        <Box ref={myRef}>
          <CanonApp
            mt={['xregular', 'xregular', 'large', 'large']}
            mb={['regular', 'regular', 'large', 'large']}
          >
            DODAJ UCZESTNIKÓW
          </CanonApp>
        </Box>
        <InputWithButton
          value={participantName}
          onChange={handleOnChangeParticipantName}
          onClick={handleOnEnterParticipantName}
          onKeyPress={handleKeyPress}
          disabled={isEmpty(participantName)}
          label="Imię uczestnika"
        />
        <NewParticipantElementList
          mt={['small', 'small', 'small', 'small']}
          names={state.participants.map(({ name }) => name)}
          onClose={handleOnCloseParticipantName}
        />
      </Index.ContentContainer>
      <Index.ButtonContainer>
        <Index.Background />

        <Index.Button
          colorfull
          onClick={handleOnClickButton}
          onMouseDown={(e: any) => e.preventDefault()}
          disabled={!isValid}
          Icon={isLoading ? SpinnerFadingCircle : null}
        >
          UTWÓRZ WYDARZENIE
        </Index.Button>
      </Index.ButtonContainer>
    </Index.Container>
  );
};

function isEmpty(str: string): boolean {
  return !str.replace(/\s+/, '').length;
}

Index.ButtonContainer = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: ${Theme.space.small}px ${Theme.space.small}px 50px;
  background-color: ${Theme.colors.main};
  justify-content: center;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 558px;
    left: 50%;
    transform: translateX(-50%);
    padding: ${Theme.space.small}px ${Theme.space.small}px 74px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

Index.ContentContainer = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  padding: 0 ${Theme.space.small}px calc(103px + 60px) ${Theme.space.small}px;
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

Index.Container = styled(Box)`
  position: relative;
`;

Index.Button = styled(ButtonWithIcon).attrs({ ...Theme.textStyles.buttonApp })`
  width: 270px;
`;

Index.Background = styled(BubblesNarrowBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
`;

export default Index;
