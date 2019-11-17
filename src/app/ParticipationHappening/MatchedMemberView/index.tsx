import React from 'react';
import styled from 'styled-components';
import { Member } from '../model';
import { Footer } from '../shared';
import { Background, Box, NAVIGATION_SHADOW, BaseTypography, Spinner } from '../../../components';
import { Theme } from '../../../utils';

export interface MatchedMemberViewData {
  me: Member;
  matchedMember: Member;
}

interface MatchedMemberViewProps {
  data: MatchedMemberViewData;
}

const Index = ({ data: { me, matchedMember } }: MatchedMemberViewProps) => {
  return (
    <Index.Container>
      <Background />
      <Index.Text as="h1">
        <b>{me.name}</b>, Twój los to:
      </Index.Text>
      <Index.BigTextContainer>
        <Index.SpinnerContainer>
          <Index.Spinner />
        </Index.SpinnerContainer>
        <Index.BigText as="p">{matchedMember.name}</Index.BigText>
      </Index.BigTextContainer>
      <Footer />
    </Index.Container>
  );
};
Index.Container = styled(Box)`
  position: relative;
  padding: ${Theme.space.xregular - NAVIGATION_SHADOW}px ${Theme.space.small}px 200px
    ${Theme.space.small}px;
  color: ${Theme.colors.main};
  text-align: center;
  background-color: ${Theme.colors.mainContrast};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Index.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
`;

Index.BigText = styled(BaseTypography)`
  font-size: 41px;
  font-weight: 400;
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
