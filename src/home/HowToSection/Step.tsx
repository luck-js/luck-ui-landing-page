import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Stepper from '../../../static/how-to-stepper.svg';
import { Box, Canon, Flex, MediumText } from '../../components';
import { Theme } from '../../utils';
import media from '../../utils/media';

interface StepProps {
  header: string;
  descriptions: string[];
  src: string;
  last?: boolean;
}

const StepContainer = styled(Flex)<{ last: any }>`
  position: relative;
  padding-bottom: 200px;
  border-left: 3px solid ${Theme.colors.gray3};
  border-color: ${props => (props.last ? 'transparent' : Theme.colors.gray3)};
`;

const Content = styled(Box)`
  margin-top: -${Theme.space.xregular}px
  
  ${media.greaterThan('mobile')`
    padding-left: ${Theme.space.large}px
    padding-right: ${Theme.space.xlarge}px
  `}
`;

const Header = styled(Canon).attrs({ tag: 'h3' })`
  line-height: 1.4;
`;
const Text = styled(MediumText)`
  line-height: 1.4;
`;

const Image = styled('img')`
  margin-top: -125px;
`;

const StepperImage = styled(Stepper)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-55%) translateY(-50%) ;
`;


const Step = ({ header, descriptions, src, last = false }: StepProps) => (
  <StepContainer last={last}>
    <Content>
      <Header mb={['small', 'regular', 'regular']}>{header}</Header>
      {descriptions.map(description => (
        <Text mb={['xsmall', 'medium', 'medium']}>{description}</Text>
      ))}
    </Content>
    <Image src={src} />
    <StepperImage />
  </StepContainer>
);

export default Step;
