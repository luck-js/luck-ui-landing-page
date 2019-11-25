import React, { useState } from 'react';
import { Box } from '../../../components';
import styled from 'styled-components';
import FormHappeningSection from './FormHappeningSection';
import PreviewHappeningSection from './PreviewHappeningSection';
import { NewHappeningFlowProvider } from './NewHappeningContext';

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
  const [stepIndex] = useState(1);
  return (
    <Index.Container>
      <NewHappeningFlowProvider name={name}>
        <Box display={stepIndex === 0 ? 'block' : 'none'}>
          <FormHappeningSection />
        </Box>
        <Box display={stepIndex === 1 ? 'block' : 'none'}>
          <PreviewHappeningSection />
        </Box>
      </NewHappeningFlowProvider>
    </Index.Container>
  );
};

Index.Container = styled(Box)``;

export default Index;
