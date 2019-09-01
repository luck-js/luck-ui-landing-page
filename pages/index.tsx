import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
`;

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <Title>Hello Next.js 👋</Title>
    </Layout>
  )
}
export default Index
