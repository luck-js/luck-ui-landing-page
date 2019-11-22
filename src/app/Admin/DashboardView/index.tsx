import React from 'react';
import styled from 'styled-components';
import { Box } from '../../../components';
import { Theme } from '../../../utils';
export interface DashboardViewData {}

export interface DashboardViewProps {
  data: DashboardViewData;
}
const Index = ({ data, ...props }: DashboardViewProps) => {
  return <Index.Container {...props}></Index.Container>;
};

Index.Container = styled(Box)`
  margin: 0 auto;
  max-width: 700px;
  color: ${Theme.colors.black};
  text-align: center;
`;

export default Index;
