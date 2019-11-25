import React, { useState } from 'react';
import { Box } from '../../../components';
import styled from 'styled-components';
import FormHappeningSection from './FormHappeningSection'
import PreviewHappeningSection from './PreviewHappeningSection'

export interface NewHappeningViewData {
  name: string;
}

interface NewHappeningViewProps {
  data: NewHappeningViewData;
}

interface NewHappeningViewPage<P = NewHappeningViewProps> extends React.FunctionComponent<P> {
  Container: any;
}

const Index: NewHappeningViewPage = ({ data: { name } }) => {
  const [stepIndex] = useState(0);
  return (
    <Index.Container>
      <Box display={stepIndex === 0 ? 'block' : 'none'}>
        <FormHappeningSection name={name}/>
      </Box>
      <Box display={stepIndex === 1 ? 'block' : 'none'}>
        <PreviewHappeningSection name={name}/>
      </Box>
    </Index.Container>
  );
};

Index.Container = styled(Box)`
  
`;

export default Index
