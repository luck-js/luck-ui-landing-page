import React from 'react';
import styled from 'styled-components';
import BlogLayout from '../../../../components/BlogLayout';
import {Box, Button, Canon} from '../../../../components';
import {Theme} from "../../../../utils"

interface IndexProps {}

interface StatelessPage<P = IndexProps> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
  Button: any;
}
const Container = styled(Box)`
  height: calc(100% - 69px);]
  padding: 0 ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
`;

const Index: StatelessPage = () => {
  return (
    <BlogLayout>
      <Container>
          <Canon
            mt={['xregular', 'xregular', 'xregular', 'xregular']}
            mb={['regular', 'regular', 'regular', 'regular']}
          >
            UDOSTĘPNIJ LINKI
          </Canon>
      </Container>
    </BlogLayout>
  );
};

Index.Button = styled(Button)`
  width: 270px;
`

export default Index;
