import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Theme } from '../../../utils';
import { Footer } from '../shared';
import {
  Box,
  BaseTypography,
  Canon,
  Trafalgar,
  BaseButton,
  Background,
  NAVIGATION_HEIGHT,
  NAVIGATION_SHADOW,
} from '../../../components';
import {Happening, Member} from "../model"

export interface WelcomeMemberViewData {
  happening: Happening;
  member: Member;
  id: string;
}

interface WelcomeMemberViewProps {
  data: WelcomeMemberViewData;
}

const Index: any = ({data :{ id, member, happening }}: WelcomeMemberViewProps) => {
  const [href, setHref] = useState();

  useEffect(() => {
    setHref(`https://${window.location.host}/app/twoj-los?id=${id}`);
  }, []);

  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight((window.innerHeight - NAVIGATION_HEIGHT) * 0.15);
  }, []);

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
          pt={['xregular', 'xregular', 'xregular', 'xregular']}
          mb={['regular', 'regular', 'regular', 'regular']}
        >
          {happening.name}
        </Index.Text>
      );
    } else return null;
  };

  return (
    <Index.Container>
      <Background />
      <Index.HappeningContentWrapper height={height}>
        {renderHappeningContent()}
      </Index.HappeningContentWrapper>
      <Index.Text as="h2" pt={['xregular', 'xregular', 'xregular', 'xregular']}>
        <b>{member.name}</b>, to Ty?
      </Index.Text>
      <Index.Text as="p" mb={['regular', 'regular', 'regular', 'regular']}>
        Przejdź do losowania.
      </Index.Text>
      <Link href={`/app/participation-happening/matched-member?id=${id}`}>
        <Index.Button
          href={href}
          ariaLabel={'przejdź do losowania'}
          as={'a'}
          onMouseDown={(e: any) => e.preventDefault()}
        >
          LOSUJ
        </Index.Button>
      </Link>
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
`;

Index.HappeningContentWrapper = styled(Box)<{ height: number }>`
  min-height: ${props => (props.height ? `${props.height}px` : '15%')};
`;

Index.HappeningContentContainer = styled(Box)`
  padding: 0 15px;
  border-radius: 15px;
  border: 2px dashed rgba(249, 249, 249, 0.2);
  text-align: center;
`;

Index.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
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
  text-align: center;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 8px 15px;
  font-weight: 800;
  transition: border-color 0.4s, color 0.4s, background-color 0.4s, box-shadow 0.4s, transform 0.4s,
    scale 0.4s;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.28);
`;

export default Index;
