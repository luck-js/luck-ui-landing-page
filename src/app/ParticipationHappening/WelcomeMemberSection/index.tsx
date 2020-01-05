import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utils';

import {
  Box,
  BaseTypography,
  Canon,
  Trafalgar,
  BaseButton,
} from '../../../components';
import { Happening, Member } from '../model';
import media from '../../../utils/media';

export interface WelcomeMemberSectionData {
  happening: Happening;
  member: Member;
}

interface WelcomeMemberSectionProps {
  data: WelcomeMemberSectionData;
  onClick: any;
}
//TODO: 12px
//TODO: font-family -> Lato
const Index: any = ({ data: { member, happening }, onClick }: WelcomeMemberSectionProps) => {

  const renderHappeningContent = () => {
    if (happening.description) {
      return (
        <Index.HappeningContentContainer>
          <Canon as="h1" mt={['small', 'small', 'medium', 'regular']}>
            {happening.name}
          </Canon>
          <Trafalgar
            as="p"
            mt={['small', 'small', 'medium', 'regular']}
            mb={['small', 'small', 'medium', 'regular']}
          >
            {happening.description}
          </Trafalgar>
        </Index.HappeningContentContainer>
      );
    } else if (happening.name) {
      return (
        <Index.Text
          as="h1"
          pt={['xregular', 'xregular', 'large', 'large']}
          mb={['regular', 'regular', 'regular', 'regular']}
        >
          {happening.name}
        </Index.Text>
      );
    } else return null;
  };

  return (
    <>
      <Index.HappeningContentWrapper>{renderHappeningContent()}</Index.HappeningContentWrapper>
      <Index.Text as="h2" pt={['xregular', 'xregular', 'large', 'large']}>
        <b>{member.name}</b>, to Ty?
      </Index.Text>
      <Index.Text as="p" mb={['regular', 'regular', 'regular', 'regular']}>
        Przejdź do losowania.
      </Index.Text>
      <Index.Button onClick={onClick} onMouseDown={(e: any) => e.preventDefault()}>
        LOSUJ
      </Index.Button>
    </>
  );
};

Index.HappeningContentWrapper = styled(Box)`
  min-height: 80px;
`;

Index.HappeningContentContainer = styled(Box)`
  padding: 0 15px;
  border-radius: 15px;
  border: 2px dashed rgba(249, 249, 249, 0.2);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

Index.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    font-size: 42px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

Index.Button = styled(BaseButton)`
  margin: 0 auto;
  width: 132px;
  height: 132px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  cursor: pointer;
  background-color: ${Theme.colors.main};
  border: 2px solid ${Theme.colors.main};
  color: ${Theme.colors.mainContrast};
  font-family: ${Theme.fontFamilies.body};
  text-align: center;
  text-transform: uppercase;
  border-radius: 23px;
  padding: 8px 20px;
  font-weight: 700;
  transition: border-color 0.4s, color 0.4s, background-color 0.4s, box-shadow 0.4s, transform 0.4s,
    scale 0.4s;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.28);
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    margin: ${Theme.space.regular}px auto ${Theme.space.large}px auto
    border-radius: 28px;
    font-size: 41px;
    width: 162px;
    height: 162px
  `}
  
  ${media.greaterThan('desktop')`
  
  `}

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
  }
`;

export default Index;
