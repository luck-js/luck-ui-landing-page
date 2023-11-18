import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import useComponentSize from '@rehooks/component-size';
import { Theme, usePrevious } from '../../../../utils';
import { InputWithButton } from '../InputWithButton';
import { NewParticipant } from '../../model';
import { Box, ButtonWithIcon, CanonApp, Input, NAVIGATION_HEIGHT } from '../../../../components';
import { useNewHappeningFlow } from '../NewHappeningContext';
import NewParticipantElementList from './NewParticipantElementList';
import { ButtonContainer, ContentContainer, SectionBackground } from '../SectionLayout';
import { FunctionComponent } from '../../../../utils/function-component.interface';

interface FormHappeningSectionData {}

interface FormHappeningSectionProps extends FormHappeningSectionData {}

interface FormHappeningSectionPage<P = FormHappeningSectionProps>
  extends FunctionComponent<P> {
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
  const { state, editNewHappening, goToPreview } = useNewHappeningFlow();
  const previousParticipants = usePrevious<NewParticipant[]>(state.happening.participants);

  const handleOnChangeTitle = ({ target: { value } }: any) => {
    editNewHappening({ ...state.happening, name: value });
  };

  const handleOnChangeDescription = ({ target: { value } }: any) => {
    editNewHappening({ ...state.happening, description: value });
  };

  const [participantName, setParticipantName] = useState<string>('');

  const handleOnChangeParticipantName = ({ target: { value } }: any) => {
    setParticipantName(value);
  };

  const handleOnEnterParticipantName = () => {
    if (isEmpty(participantName)) return;
    editNewHappening({
      ...state.happening,
      participants: [...state.happening.participants, { name: participantName }],
    });

    setParticipantName('');
  };

  const handleOnCloseParticipantName = (value: string) => {
    const participants = state.happening.participants.filter(({ name }) => name !== value);
    editNewHappening({ ...state.happening, participants });
  };

  const handleKeyPress = (e: any) => {
    if (e.charCode == 13) {
      handleOnEnterParticipantName();
    }
    if (e.keyCode == 13) {
      handleOnEnterParticipantName();
    }
  };

  const handleOnClickButton = () => goToPreview();

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    if (previousParticipants && previousParticipants.length < state.happening.participants.length) {
      executeScroll();
    }
  }, [state.happening.participants]);

  const [isValid, setIsValid] = useState<boolean>(state.happening.participants.length > 2);

  useEffect(() => {
    setIsValid(state.happening.participants.length > 2);
  }, [state.happening.participants]);

  const [textareaRows, setTextareaRows] = useState<number>(5);

  let containerRef = useRef(null);
  let { width } = useComponentSize(containerRef);

  useEffect(() => {
    const breakpointIndex = Theme.breakpoints.findIndex(
      (breakpoint) => window.innerWidth < parseInt(breakpoint),
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
          value={state.happening.name}
          onChange={handleOnChangeTitle}
        />
        <Input
          autosize
          mt={['xregular', 'xregular', 'xregular', 'xregular']}
          type="text"
          rows={textareaRows}
          as={TextareaAutosize}
          value={state.happening.description}
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
          names={state.happening.participants.map(({ name }) => name)}
          onClose={handleOnCloseParticipantName}
        />
      </Index.ContentContainer>
      <Index.ButtonContainer>
        <Index.Background />

        <Index.Button
          colorfull
          modifiers={['contrast']}
          onClick={handleOnClickButton}
          onMouseDown={(e: any) => e.preventDefault()}
          disabled={!isValid}
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

Index.Container = styled(Box)`
  position: relative;
`;

Index.ContentContainer = ContentContainer;

Index.ButtonContainer = ButtonContainer;

Index.Button = styled(ButtonWithIcon).attrs({ ...Theme.textStyles.smallText })`
  width: 270px;
`;

Index.Background = SectionBackground;

export default Index;
