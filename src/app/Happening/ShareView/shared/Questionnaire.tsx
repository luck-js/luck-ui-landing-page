import React, { createContext, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { CanonApp } from '../../../../components/Typography';
import styled from 'styled-components';
import { Theme } from '../../../../utils';
import { BaseButton, Box } from '../../../../components';
// @ts-ignore
import Star from '../../../../../static/star.svg';

interface QuestionnaireProps {}

interface QuestionnaireComponent extends React.FunctionComponent<QuestionnaireProps> {
  Container: any;
  Header: any;
  Content: any;
  Button: any;
}

const Questionnaire: QuestionnaireComponent = () => {
  return (
    <Questionnaire.Container>
      <Questionnaire.Header mb={['small', 'small', 'large', 'large']}>
        Oceń Aplikację:
      </Questionnaire.Header>
      <Questionnaire.Content>
        <Questionnaire.Button onMouseDown={(e: any) => e.preventDefault()}>
          <Star />
        </Questionnaire.Button>
      </Questionnaire.Content>
    </Questionnaire.Container>
  );
};

Questionnaire.Button = styled(BaseButton)`
  cursor: pointer;
  width: 36px;
  height: 36px;

  &:hover {
    svg {
      path {
        fill: ${Theme.colors.mainContrast};
      }
    }
  }

  svg {
    height: 100%;
    width: auto;

    path {
      transition: fill 0.5s;
      fill: ${Theme.colors.darkMain3};
    }
  }
`;
Questionnaire.Container = styled(Box)``;

Questionnaire.Content = styled(Box)`
  padding-bottom: ${Theme.space.small}px;
  text-align: center;
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
