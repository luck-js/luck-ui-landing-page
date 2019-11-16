import { Happening, Member } from '../../../pages/app/participation-happening';
import styled from 'styled-components';
import { Box } from '../../Box';
import { Theme } from '../../../utils';
import { BaseTypography } from '../../Typography/BaseTypography';
import Link from "next/link"
import * as React from "react"
import {BaseButton} from "../../Button"
import {useEffect} from "react"
import {useState} from "react"

interface ShareViewProps {
  happening: Happening;
  member: Member;
  id: string;
}

const Container = styled(Box)`
  padding: 0 ${Theme.space.small}px;
  color: ${Theme.colors.main};
  text-align: center;
`;
const WelcomeView: any = ({ id, member }: ShareViewProps) => {
  const [href, setHref] = useState()

  useEffect(() => {
    setHref(`http://${window.location.host}/app/twoj-los?id=${id}`);
  },[])

  return (
    <Container>
      <WelcomeView.Text as="h2" mt={['xregular', 'xregular', 'xregular', 'xregular']}>
        <b>{member.name}</b>, to Ty?
      </WelcomeView.Text>
      <WelcomeView.Text as="p" mb={['regular', 'regular', 'regular', 'regular']}>
        Przejdź do losowania.
      </WelcomeView.Text>
      <Link href={href}>
        <WelcomeView.Button href={href} ariaLabel={"przejdź do losowania"} as={'a'} onMouseDown={(e:any) => e.preventDefault()} >
          LOSUJ
        </WelcomeView.Button>
      </Link>
    </Container>
  );
};

WelcomeView.Text = styled(BaseTypography)`
  font-size: 26px;
  font-weight: 400;
`;

WelcomeView.Button = styled(BaseButton)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -66px;
    margin-top: calc(-66px - 15px);
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
