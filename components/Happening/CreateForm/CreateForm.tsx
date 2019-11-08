import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { Box, Button, Flex, Input, Canon } from '../../../components';
import { Theme } from '../../../utils';
import Link from 'next/link';
import { ElementList } from './ElementList';
import { InputWithButton } from './InputWithButton';

interface IndexProps {}

interface Participant {
  name: string;
}
interface Happening {
  title: string;
  description: string;
  participants: Participant[];
}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
  Button: any;
}

const INIT_HAPPENING: Happening = {
  title: '',
  description: '',
  participants: [],
};

const NAVIGATION_HEIGHT = 50;

const Container = styled(Box)`
  height: calc(100% - ${NAVIGATION_HEIGHT }px);
  position: relative;
`;

const ContentContainer = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  padding: 0 ${Theme.space.small}px calc(103px + 60px) ${Theme.space.small}px;

  color: ${Theme.colors.black};
  text-align: center;
`;

const ButtonContainer = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: ${Theme.space.small}px ${Theme.space.small}px 50px;
  background-color: ${Theme.colors.main};
  justify-content: center;
`;

const Background = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
  background-image: url(static/bubbles-shadow.png);
  z-index: 0;
  pointer-events: none;
`;

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop + NAVIGATION_HEIGHT)
}// General scroll to element function

const CreateForm: StatelessPage = () => {
  const [happening, setHappening] = useState<Happening>(INIT_HAPPENING);

  const handleOnChangeTitle = ({ target: { value } }: any) => {
    setHappening(happening => ({ ...happening, title: value }));
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
    executeScroll();
    setHappening(happening => ({
      ...happening,
      participants: [...happening.participants, { name: participantName }],
    }));
    setParticipantName('');
  };

  const handleOnCloseParticipantName = (value: string) => {
    const participants = happening.participants.filter(({name}) => name !== value);
    setHappening(happening => ({...happening, participants }))
  }

  const handleKeyPress = (e: any) => {
    if (e.charCode == 13) {
      handleOnEnterParticipantName();
    }
    if (e.keyCode == 13) {
      handleOnEnterParticipantName();
    }
  };

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  useEffect(()=>{
    executeScroll()
  },[])

  return (
    <Container>
      <ContentContainer>
        <Canon
          mt={['xregular', 'xregular', 'xregular', 'xregular']}
          mb={['regular', 'regular', 'regular', 'regular']}
        >
          STWÓRZ WYDARZENIE
        </Canon>
        <Input
          type="text"
          placeholder="Nazwa wydarzenia..."
          value={happening.title}
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
          <Canon
            mt={['xregular', 'xregular', 'xregular', 'xregular']}
            mb={['regular', 'regular', 'regular', 'regular']}
          >
            DODAJ UCZESTNIKÓW
          </Canon>
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
      </ContentContainer>
      <ButtonContainer>
        <Background />
        <Link href="/app/happening/share" as="/app/udostepnij-linki">
          <CreateForm.Button
            colorfull
            as="a"
            href="/app/udostepnij-linki"
            ariaLabel={`przejdź do aplikacji`}
          >
            UTWÓRZ WYDARZENIE
          </CreateForm.Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

function isEmpty(str: string): boolean {
  return !str.replace(/\s+/, '').length;
}

CreateForm.Button = styled(Button)`
  width: 270px;
`;

export default CreateForm;
