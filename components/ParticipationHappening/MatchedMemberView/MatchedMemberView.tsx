import { Member } from '../../../pages/app/participation-happening/match';
import { Footer } from '../shared/Footer';
import { Background } from '../../Layout';
import React from 'react';
import styled from 'styled-components';
import { Box } from '../../Box';
import { Theme } from '../../../utils';
import { NAVIGATION_SHADOW } from '../../Navigation';
import { BaseTypography } from '../../Typography/BaseTypography';

interface MatchedMemberViewProps {
  me: Member;
  matchedMember: Member;
}

const Container = styled(Box)`
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

const MatchedMemberView = ({ me, matchedMember }: MatchedMemberViewProps) => {
  return (
    <Container>
      <Background />
      <MatchedMemberView.Text as="h1">
        <b>{me.name}</b>, Twój los to:
      </MatchedMemberView.Text>
      <MatchedMemberView.BigText as="p">{matchedMember.name}</MatchedMemberView.BigText>
      <Footer />
    </Container>
  );
};
MatchedMemberView.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
`;
MatchedMemberView.BigText = styled(BaseTypography)`
  font-size: 41px;
  font-weight: 400;
`;

export default MatchedMemberView;
