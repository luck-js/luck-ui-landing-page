import React, {useEffect, useState} from "react"
import Link from "next/link"
import styled from 'styled-components';
import {Happening, Member} from '../../../pages/app/participation-happening';
import {Box} from '../../Box';
import {Theme} from '../../../utils';
import {BaseTypography} from '../../Typography/BaseTypography';
import {BaseButton} from "../../Button"
import {Canon, Trafalgar} from "../../Typography"
import {Background} from "../../Layout"
import {NAVIGATION_HEIGHT, NAVIGATION_SHADOW} from "../../Navigation"
import {Footer} from "../shared/Footer"

interface ShareViewProps {
  happening: Happening;
  member: Member;
  id: string;
}

const HappeningContentContainer = styled(Box)`
  padding: 0 15px;
  border-radius: 15px;
  border: 2px dashed rgba(249, 249, 249, 0.2);
  text-align: center;
`;
const HappeningContentWrapper = styled(Box)<{height: number}>`
  min-height: ${props => props.height ? `${props.height}px`: "15%"};
`
const Container = styled(Box)`
  position: relative;
  padding: ${Theme.space.xregular - NAVIGATION_SHADOW}px ${Theme.space.small}px 200px ${Theme.space.small}px;
  color: ${Theme.colors.main};
  text-align: center;
  background-color: ${Theme.colors.mainContrast};
  min-height: 100%;
`;
const WelcomeView: any = ({ id, member, happening }: ShareViewProps) => {
  const [href, setHref] = useState()

  useEffect(() => {
    setHref(`http://${window.location.host}/app/twoj-los?id=${id}`);
  },[])

  const [height, setHeight] = useState()

  useEffect(() => {
    setHeight((window.innerHeight - NAVIGATION_HEIGHT) * 0.15)
  },[])

  const renderHappeningContent = () => {
    if (happening.description) {
      return (
        <HappeningContentContainer>
          <Canon as="h1" mt={['small', 'small', 'medium', 'regular']}>{happening.name}</Canon>
          <Trafalgar as="p" mt={['small', 'small', 'medium', 'regular']} mb={['small', 'small', 'medium', 'regular']}>{happening.description}</Trafalgar>
        </HappeningContentContainer>
      );
    } else if (happening.name) {
      return (
        <WelcomeView.Text
          as="h1"
          pt={['xregular', 'xregular', 'xregular', 'xregular']}
          mb={['regular', 'regular', 'regular', 'regular']}
        >
          {happening.name}
        </WelcomeView.Text>
      );
    } else return null;
  };

  return (
    <Container>
      <Background />
      <HappeningContentWrapper
        height={height}>
        {renderHappeningContent()}
      </HappeningContentWrapper>
      <WelcomeView.Text as="h2" pt={['xregular', 'xregular', 'xregular', 'xregular']}>
        <b>{member.name}</b>, to Ty?
      </WelcomeView.Text>
      <WelcomeView.Text as="p" mb={['regular', 'regular', 'regular', 'regular']}>
        Przejdź do losowania.
      </WelcomeView.Text>
      <Link href={`/app/participation-happening/match?id=${id}`}>
        <WelcomeView.Button href={href} ariaLabel={"przejdź do losowania"} as={'a'} onMouseDown={(e:any) => e.preventDefault()} >
          LOSUJ
        </WelcomeView.Button>
      </Link>
      <Footer />
    </Container>
  );
};

WelcomeView.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
`;

WelcomeView.Button = styled(BaseButton)`
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
    transition: border-color .4s,color .4s,background-color .4s,box-shadow .4s,transform .4s,scale .4s;
    box-shadow: 0 0 50px 0 rgba(0,0,0,.28);
`

export default WelcomeView;
