import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import BlogLayout from '../../../components/BlogLayout';
import {Box, Button, Flex, Input, Canon} from '../../../components';
import { Theme } from '../../../utils';

interface IndexProps {}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
  Button: any;
}
const Container = styled(Box)`
  height: calc(100% - 69px);
  position: relative;
`;

const ContentContainer = styled(Flex)`
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 0 ${Theme.space.small}px;

  color: ${Theme.colors.black};
  text-align: center;
`;

const ButtonContainer = styled(Flex)`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 ${Theme.space.small}px 50px;
  justify-content: center;
`;

const Index: StatelessPage = () => {
  return (
    <BlogLayout>
      <Container>
        <ContentContainer>
          <Canon
            mt={['xregular', 'xregular', 'xregular', 'xregular']}
            mb={['regular', 'regular', 'regular', 'regular']}
          >
            STWÓRZ WYDARZENIE
          </Canon>
          <Input type="text" placeholder="Nazwa wydarzenia..." />
          <Input
            autosize
            mt={['xregular', 'xregular', 'xregular', 'xregular']}
            type="text"
            rows={5}
            as={TextareaAutosize}
            placeholder="Opis wydarzenia..."
          />
          <Canon
            mt={['xregular', 'xregular', 'xregular', 'xregular']}
            mb={['regular', 'regular', 'regular', 'regular']}
          >
            DODAJ UCZESTNIKÓW
          </Canon>
          <Input type="text" placeholder="Imię uczestnika..." />
        </ContentContainer>
        <ButtonContainer>
          <Index.Button colorfull>UTWÓRZ WYDARZENIE</Index.Button>
        </ButtonContainer>
      </Container>
    </BlogLayout>
  );
};

Index.Button = styled(Button)`
  width: 270px;
`

export default Index;
