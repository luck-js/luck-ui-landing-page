import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../../../../components/Modal';
import { CanonApp } from '../../../../../components/Typography';
import { Theme } from '../../../../../utils';
import {Box, Flex, TextLink} from '../../../../../components';
import { Stars } from './Stars';

interface QuestionnaireProps {}

interface QuestionnaireComponent extends React.FunctionComponent<QuestionnaireProps> {
  Container: any;
  Header: any;
  Content: any;
  StarsContainer: any;
  Stars: any;
  Button: any;
}

const Questionnaire: QuestionnaireComponent = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const handleOnClickStar = (index: number) => {
    console.log(index)
    setStepIndex(1)
  }

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
        <Questionnaire.Button underline modifiers={['black']}>Podziel się z nami swoją opinią!</Questionnaire.Button>
      </Box>

    </Questionnaire.Container>
  );
};

Questionnaire.Button = styled(TextLink)``;

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
