import React from 'react';
import styled from 'styled-components';
import { Member } from '../model';
import { Box, BaseTypography, Spinner, LazyImage } from '../../../components';
import { Theme } from '../../../utils';
import media from '../../../utils/media';

export interface MatchedMemberSectionData {
  me: Member;
  matchedMember: Member;
}

interface MatchedMemberSectionProps {
  data: MatchedMemberSectionData;
}
const Image = styled('img')<{ loading: any }>`
  width: 100%;
  height: auto;
  filter: ${(props) => (props.loading ? 'blur(10px)' : 'blur(0)')};
  opacity: ${(props) => (props.loading ? 0.8 : 0.95)};
  cursor: pointer;
  transition: opacity 0.5s, all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
  ${media.greaterThan('mobile')`
    width: 100%;
    max-width: 450px;
    height: auto;
  `}

  ${media.greaterThan('tablet')`
    
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

const BannerImage = (props: { src: string; placeholderSrc: string }) => (
  <LazyImage useSensor={false} {...props}>
    {(src: any, loading: boolean) => <Image src={src} alt={loading.toString()} loading={loading} />}
  </LazyImage>
);

const Index = ({ data: { me, matchedMember } }: MatchedMemberSectionProps) => {
  return (
    <Index.Container>
      <Index.AppContainer>
        <Index.Text as="h1" mb={['small', 'small', 'medium', 'regular']}>
          <b>{me.name}</b>, Twój los to:
        </Index.Text>
        <Index.BigTextContainer>
          <Index.SpinnerContainer>
            <Index.Spinner />
          </Index.SpinnerContainer>
          <Index.BigText as="p">{matchedMember.name}</Index.BigText>
        </Index.BigTextContainer>
      </Index.AppContainer>
      <Index.BannerImageContainer>
        <a href="https://palisienaturalnie.pl/pl/c/Swiece/16" target="_blank">
          <BannerImage src={'/static/banner.png'} placeholderSrc={'/static/compr-banner.jpg'} />
        </a>
      </Index.BannerImageContainer>
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  //position: relative;
  color: ${Theme.colors.main};
  text-align: center;
  display: grid;
  grid-template-rows: [row1-start] 25% [row1-end] auto [third-line] 25% [last-line];
  grid-template-areas:
    '.'
    'App'
    'Banner';
`;

Index.AppContainer = styled(Box)`
  position: relative;
  color: ${Theme.colors.main};
  text-align: center;
  grid-area: App;
  place-self: center;
`;

Index.BannerImageContainer = styled(Box)`
  grid-area: Banner;
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
