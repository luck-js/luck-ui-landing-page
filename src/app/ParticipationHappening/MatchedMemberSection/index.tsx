import React from 'react';
import styled from 'styled-components';
import { Member } from '../model';
import { Box, BaseTypography, Spinner } from '../../../components';
import { Theme } from '../../../utils';
import media from '../../../utils/media';

export interface MatchedMemberSectionData {
  me: Member;
  matchedMember: Member;
}

interface MatchedMemberSectionProps {
  data: MatchedMemberSectionData;
}

const Index = ({ data: { me, matchedMember } }: MatchedMemberSectionProps) => {
  return (
    <Index.Container>
      <Index.Text as="h1" mb={['small', 'small', 'medium', 'regular']}>
        <b>{me.name}</b>, Twój los to:
      </Index.Text>
      <Index.BigTextContainer>
        <Index.SpinnerContainer>
          <Index.Spinner />
        </Index.SpinnerContainer>
        <Index.BigText as="p">{matchedMember.name}</Index.BigText>
      </Index.BigTextContainer>
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  position: relative;
  color: ${Theme.colors.main};
  text-align: center;;
`;

Index.Text = styled(BaseTypography)<any>`
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

Index.BigText = styled(BaseTypography)`
  font-size: 42px;
  font-weight: 400;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    font-size: 60px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

Index.SpinnerContainer = styled('div')``;
Index.Spinner = styled(Spinner)`
  position: absolute;
  top: auto;
  left: 50%;
  background-color: color-base('white');
  width: 30px;
  height: 30px;
  margin-left: -15px;
`;

Index.BigTextContainer = styled(Box)`
  ${Index.BigText} {
    opacity: 0;
    animation: show 0.2s 1;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    @keyframes show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  ${Index.SpinnerContainer} {
    opacity: 1;
    animation: hidden 0s 1;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    @keyframes hidden {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

export default Index;
