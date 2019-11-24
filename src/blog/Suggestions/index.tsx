import React from 'react';
import Card from '../Card';
import styled from 'styled-components';
import { ViewPost } from '../../../pages/blog';
import { Flex } from '../../components';

interface SuggestionsProps {
  posts: ViewPost[];
}

interface SuggestionsComponent extends React.FunctionComponent<SuggestionsProps> {
  Container: any;
}

const Suggestions: SuggestionsComponent = ({ posts }) => {
  return (
    <>
      {posts.length > 0 && (
        <Suggestions.Container>
          {posts.map((post, index) => (
            <Card key={`${post._id}-${index}`} {...post} />
          ))}
        </Suggestions.Container>
      )}
    </>
  );
};

Suggestions.Container = styled(Flex)``;

export default Suggestions;
