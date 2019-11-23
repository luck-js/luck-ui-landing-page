import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../../../../components/Modal';
import {CanonApp, InputApp} from '../../../../../components/Typography';
import { Theme } from '../../../../../utils';
import {Box, Button, Flex, Input, TextLink} from '../../../../../components';
import { Stars } from './Stars';
import TextareaAutosize from 'react-autosize-textarea';

interface QuestionnaireProps {}

interface QuestionnaireComponent extends React.FunctionComponent<QuestionnaireProps> {
  Container: any;
  Header: any;
  Content: any;
  StarsContainer: any;
  Stars: any;
  TextLink: any;
  Button: any;
  Text: any;
}

const Questionnaire: QuestionnaireComponent = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const handleOnClickStar = (index: number) => {
    console.log(index)
    setStepIndex(1)
  }

  const handleOnClickNext = () => {
    setStepIndex(2)
  }

  const [opinion, setOpinion] = useState('');

  const handleOnChangeOpinion = ({ target: { value } }: any) => {
    setOpinion(value);
  }

  const handleOnSubmit = () => {
    console.log("handleOnSubmit")
    setStepIndex(3)
  };

  return (
    <Questionnaire.Container>
      <Box display={stepIndex === 0 ? "block" : "none"}>
        <Questionnaire.Header mb={['small', 'small', 'large', 'large']}>
          Oceń Aplikację:
        </Questionnaire.Header>
        <Questionnaire.Content>
          <Questionnaire.StarsContainer>
            <Questionnaire.Stars count={5} onClick={handleOnClickStar}/>
          </Questionnaire.StarsContainer>
        </Questionnaire.Content>
      </Box>

      <Box display={stepIndex === 1 ? "block" : "none"}>
        <Questionnaire.Header mb={['regular', 'regular', 'xlarge', 'xlarge']}>
          Dziękujemy!
        </Questionnaire.Header>
        <Questionnaire.TextLink underline modifiers={['black']} onClick={handleOnClickNext} onMouseDown={(e: any) => e.preventDefault()}>Podziel się z nami swoją opinią!</Questionnaire.TextLink>
      </Box>

      <Box display={stepIndex === 2 ? "block" : "none"}>
        <Questionnaire.Header mb={['small', 'small', 'large', 'large']}>
          Co sądzisz o aplikacji?
        </Questionnaire.Header>
        <Questionnaire.Text mb={['small', 'small', 'large', 'large']}>
          Będziemy ogromnie wdzięczni, gdy napiszesz nam np.: Jak byś sugerował rozwijać aplikacje bądź coś co byś poprawił?
        </Questionnaire.Text>
        <Input
          autosize
          type="text"
          rows={5}
          value={opinion}
          as={TextareaAutosize}
          onChange={handleOnChangeOpinion}
        />
        <Questionnaire.Button mt={['regular', 'regular', 'xlarge', 'xlarge']} colorfull onClick={handleOnSubmit} onMouseDown={(e: any) => e.preventDefault()}>Wyślij!</Questionnaire.Button>
      </Box>

      <Box display={stepIndex === 3 ? "block" : "none"}>
        <Questionnaire.Header mb={['regular', 'regular', 'xlarge', 'xlarge']}>
          Jesteś wspaniały! <br/> Dziękujemy!
        </Questionnaire.Header>
        <Questionnaire.TextLink underline modifiers={['black']} onMouseDown={(e: any) => e.preventDefault()}>Wróć do udostępniania linków</Questionnaire.TextLink>
      </Box>


    </Questionnaire.Container>
  );
};

Questionnaire.Button = styled(Button)``;
Questionnaire.TextLink = styled(TextLink)``;

Questionnaire.Stars = styled(Stars)``;

Questionnaire.Container = styled(Box)`
  padding-bottom: ${Theme.space.small}px;
  text-align: center;
  min-height: 115px;
`;

Questionnaire.Content = styled(Box)`
`;

Questionnaire.StarsContainer = styled(Flex)`
  justify-content: center;
`;

Questionnaire.Header = styled(CanonApp)`
  color: ${Theme.colors.black};
`;
Questionnaire.Text = styled(InputApp)`
  color: ${Theme.colors.black};
  text-align: left;
`;

const QuestionnaireContext = createContext<any>(null);

export function useQuestionnaire() {
  const context = React.useContext(QuestionnaireContext);

  if (!context) {
    throw new Error('Popup must be used within a PopupProvider');
  }

  return context;
}

export const QuestionnaireProvider = ({ children }: any) => {
  const [shouldBeOpen, setShouldBeOpen] = useState<boolean>(false);
  const context = { shouldBeOpen, setShouldBeOpen };
  return (
    <QuestionnaireContext.Provider value={context}>
      <Modal shouldBeOpen={shouldBeOpen} onClose={() => setShouldBeOpen(false)}>
        <Questionnaire />
      </Modal>
      {children}
    </QuestionnaireContext.Provider>
  );
};
