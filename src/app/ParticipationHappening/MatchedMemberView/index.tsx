import React from 'react';
import styled from 'styled-components';
import { Member } from '../model';
import { Footer } from '../shared';
import { Background, Box, NAVIGATION_SHADOW, BaseTypography } from '../../../components';
import { Theme } from '../../../utils';

export interface MatchedMemberViewData {
  me: Member;
  matchedMember: Member;
}

interface MatchedMemberViewProps {
  data: MatchedMemberViewData
}

const Index = ({data: { me, matchedMember }}: MatchedMemberViewProps) => {
  return (
    <Index.Container>
      <Background />
      <Index.Text as="h1">
        <b>{me.name}</b>, Twój los to:
      </Index.Text>
      <Index.BigText as="p">{matchedMember.name}</Index.BigText>
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

export default Index;
