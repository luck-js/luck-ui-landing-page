import React, { createContext, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { CanonApp } from '../../../../components/Typography';
import styled from 'styled-components';
import { helper, Theme } from '../../../../utils';
import { BaseButton, Box, Flex } from '../../../../components';
// @ts-ignore
import Star from '../../../../../static/star.svg';
import useHover from "../../../../utils/useHover"

interface QuestionnaireProps {}

interface QuestionnaireComponent extends React.FunctionComponent<QuestionnaireProps> {
  Container: any;
  Header: any;
  Content: any;
  Button: any;
  StarsContainer: any;
}

const STARS = helper(0, 5);

const Questionnaire: QuestionnaireComponent = () => {
  const [hoverStarIndex, setHoverStarIndex] = useState(-1);

  const handleMouseOver = (index: number) => {
    setHoverStarIndex(index)
  }

  const handleMouseOut = () => {
    setHoverStarIndex(-1)
  }
  return (
    <Questionnaire.Container>
      <Questionnaire.Header mb={['small', 'small', 'large', 'large']}>
        Oceń Aplikację:
      </Questionnaire.Header>
      <Questionnaire.Content>
        <Questionnaire.StarsContainer>
          {STARS.map((index) => {
            let [hoverRef] = useHover(() => handleMouseOver(index), () => handleMouseOut());
            return (
              <Questionnaire.Button ref={hoverRef} isHover={index <= hoverStarIndex}
                                    onMouseDown={(e: any) => e.preventDefault()}>
                <Star />
              </Questionnaire.Button>
            )
          })}
        </Questionnaire.StarsContainer>
      </Questionnaire.Content>
    </Questionnaire.Container>
  );
};

Questionnaire.Button = styled(BaseButton)<any>`
  cursor: pointer;
  width: ${Theme.space.small + 36}px;
  height: 36px;
  padding-right: ${Theme.space.small}px;
  &:last-of-type {
    padding-right: 0;
    width: 36px;
  }

  svg {
    height: 100%;
    width: auto;
    opacity: ${props => props.isHover ? 0.6: 1};
    transition: opacity 0.5s;
  
    path {
      transition: fill 0.5s;
      fill: ${props => props.isHover ? Theme.colors.mainContrast : Theme.colors.darkMain3};
    }
  }
`;
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
