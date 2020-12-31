import React from 'react';
import styled from 'styled-components';
import { ViewPost } from '../../../pages/blog';
import { Box } from '../../components';
import {Theme} from "../../utils"
import Card from '../Card';
import {CardsContainer} from "../Card/CardsContainer"
import {Text} from '../Typography';

interface SuggestionsProps {
  posts: ViewPost[];
}

interface SuggestionsComponent extends React.FunctionComponent<SuggestionsProps> {
  Container: any;
  Text: any;
  CardContainer: any;
}

const Suggestions: SuggestionsComponent = ({ posts }) => {
  return (
    <>
      {posts.length > 0 && (
        <Suggestions.Container>
          <Suggestions.Text>Przeczytaj inne posty: </Suggestions.Text>
          <Suggestions.CardContainer>
            {posts.map((post, index) => (
              <Card key={`${post._id}-${index}`} {...post} />
            ))}
          </Suggestions.CardContainer>
        </Suggestions.Container>
      )}
    </>
  );
};

Suggestions.Container = styled(Box)``

Suggestions.Text = styled(Text)`
    border-bottom: 1px solid ${Theme.colors.black};
`

Suggestions.CardContainer = styled(CardsContainer)`
`;

export default Suggestions;
