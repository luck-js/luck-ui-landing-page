import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../../../../components/Modal';
import { CanonApp } from '../../../../../components/Typography';
import { Theme } from '../../../../../utils';
import { Box, Flex } from '../../../../../components';
import Stars from'./Stars';

interface QuestionnaireProps {}

interface QuestionnaireComponent extends React.FunctionComponent<QuestionnaireProps> {
  Container: any;
  Header: any;
  Content: any;
  StarsContainer: any;
  Stars: any;
}

const Questionnaire: QuestionnaireComponent = () => {
  return (
    <Questionnaire.Container>
      <Questionnaire.Header mb={['small', 'small', 'large', 'large']}>
        Oceń Aplikację:
      </Questionnaire.Header>
      <Questionnaire.Content>
        <Questionnaire.StarsContainer>
          <Questionnaire.Stars count={5} />
        </Questionnaire.StarsContainer>
      </Questionnaire.Content>
    </Questionnaire.Container>
  );
};

Questionnaire.Stars = styled(Stars)``;

Questionnaire.Container = styled(Box)``;

Questionnaire.Content = styled(Box)`
  padding-bottom: ${Theme.space.small}px;
  text-align: center;
`;

Questionnaire.StarsContainer = styled(Flex)`
  justify-content: center;
`;

Questionnaire.Header = styled(CanonApp)`
  color: ${Theme.colors.black};
  text-align: center;
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
