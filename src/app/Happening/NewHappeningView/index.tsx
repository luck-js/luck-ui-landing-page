import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import TextareaAutosize from 'react-autosize-textarea';
import { Theme, usePrevious } from '../../../utils';
import { ElementList } from './ElementList';
import { InputWithButton } from './InputWithButton';
import { BubblesShadowBackground } from '../../BubblesShadowBackground';
import { INIT_NEW_HAPPENING, NewHappening, NewParticipant } from '../model';
import { apiAxios } from '../../api.axios';
import {
  Box,
  ButtonWithIcon,
  CanonApp,
  Flex,
  Input,
  NAVIGATION_HEIGHT,
  SpinnerFadingCircle,
} from '../../../components';
import media from '../../../utils/media';

export interface NewHappeningViewData {
  name: string;
}

interface NewHappeningViewProps {
  data: NewHappeningViewData;
}

interface NewHappeningViewPage<P = NewHappeningViewProps> extends React.FunctionComponent<P> {
  Button: any;
  Background: any;
  Container: any;
  ContentContainer: any;
  ButtonContainer: any;
}

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop + NAVIGATION_HEIGHT);
};

const Index: NewHappeningViewPage = ({ data: { name } }) => {
  const [happening, setHappening] = useState<NewHappening>({ ...INIT_NEW_HAPPENING, name });
  const previousParticipants = usePrevious<NewParticipant[]>(happening.participants);

  const handleOnChangeTitle = ({ target: { value } }: any) => {
    setHappening(happening => ({ ...happening, name: value }));
  };

  const handleOnChangeDescription = ({ target: { value } }: any) => {
    setHappening(happening => ({ ...happening, description: value }));
  };

  const [participantName, setParticipantName] = useState<string>('');

  const handleOnChangeParticipantName = ({ target: { value } }: any) => {
    setParticipantName(value);
  };

  const handleOnEnterParticipantName = () => {
    if (isEmpty(participantName)) return;
    setHappening(happening => ({
      ...happening,
      participants: [...happening.participants, { name: participantName }],
    }));
    setParticipantName('');
  };

  const handleOnCloseParticipantName = (value: string) => {
    const participants = happening.participants.filter(({ name }) => name !== value);
    setHappening(happening => ({ ...happening, participants }));
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
    apiAxios.post('/api/v1/published-happening', { happening }).then(({ data }) => {
      Router.push({
        pathname: '/app/udostepnij-linki',
        query: { id: data.id },
      });
    });
  };

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    if (previousParticipants && previousParticipants.length < happening.participants.length) {
      executeScroll();
    }
  }, [happening.participants]);

  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(happening.participants.length > 2);
  }, [happening.participants]);

  return (
    <Index.Container>
      <Index.ContentContainer>
        <CanonApp
          pt={['xregular', 'xregular', 'large', 'large']}
          mb={['regular', 'regular', 'large', 'large']}
        >
          STWÓRZ WYDARZENIE
        </CanonApp>
        <Input
          type="text"
          placeholder="Nazwa wydarzenia..."
          value={happening.name}
          onChange={handleOnChangeTitle}
        />
        <Input
          autosize
          mt={['xregular', 'xregular', 'xregular', 'xregular']}
          type="text"
          rows={5}
          as={TextareaAutosize}
          value={happening.description}
          onChange={handleOnChangeDescription}
          placeholder="Opis wydarzenia..."
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
          placeholder="Imię uczestnika..."
        />
        <ElementList
          mt={['small', 'small', 'small', 'small']}
          list={happening.participants.map(({ name }) => name)}
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

Index.Button = styled(ButtonWithIcon).attrs({...Theme.textStyles.buttonApp})`
  width: 270px;
`;

Index.Background = styled(BubblesShadowBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
`;

export default Index;
