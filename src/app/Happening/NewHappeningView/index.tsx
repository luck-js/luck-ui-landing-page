import React from 'react';
import { Box } from '../../../components';
import styled from 'styled-components';
import FormHappeningSection from './FormHappeningSection';
import PreviewHappeningSection from './PreviewHappeningSection';
import { NewHappeningFlowProvider } from './NewHappeningContext';
import { FunctionComponent } from '../../../utils/function-component.interface';

export interface NewHappeningViewData {
  name: string;
}

interface NewHappeningViewProps {
  data: NewHappeningViewData;
  analytics: any;
}

interface NewHappeningViewPage<P = NewHappeningViewProps> extends FunctionComponent<P> {
  Container: any;
}

const Index: NewHappeningViewPage = ({ data: { name }, analytics }) => {
  return (
    <Index.Container>
      <NewHappeningFlowProvider analytics={analytics}  name={name}>
        <FormHappeningSection />
        <PreviewHappeningSection />
      </NewHappeningFlowProvider>
    </Index.Container>
  );
};

Index.Container = styled(Box)``;

export default Index;
