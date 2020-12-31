import React from 'react';
import styled from 'styled-components';
import { Box, Canon, MediumText, Separator } from '../components';
import { Theme } from '../utils';
import media from '../utils/media';

const Container = styled(Box)`
  margin: 0 auto;
  color: ${Theme.colors.black};
  text-align: center;
`;

const Header = styled(Canon).attrs({ tag: 'h2' })`
  max-width: 1070px;
  margin: 0 auto;
  position: relative;
  line-height: 1.4;
  padding: ${Theme.space.xregular}px ${Theme.space.xsmall}px;

  ${media.greaterThan('mobile')`
    padding: ${Theme.space.large}px 0;
  `}

  ${Separator} {
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Text = styled(MediumText)`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${Theme.space.medium}px ${Theme.space.small}px;
  line-height: 1.4;

  ${media.greaterThan('mobile')`
    padding: ${Theme.space.regular}px ${Theme.space.xlarge}px;
  `}
`;

const DescriptionSection = () => {
  return (
    <Container>
      <Header>
        Aplikacja powstała z myślą o tym, by ułatwić Ci zorganizowanie losowania w gronie Twoich
        znajomych
        <Separator />
      </Header>
      <Text>
        Teraz brak jednej osoby nie przeszkodzi Wam w dobraniu się na Mikołajki. Wystarczy utworzyć
        wydarzenie, dodać jego uczestników wpisując ich imiona! Luck wygeneruje dla Ciebie unikalne
        linki. Możesz je wysłać do członków wydarzenia. Pozwolą im one wylosować swoją parę.
      </Text>
    </Container>
  );
};
export default DescriptionSection;
