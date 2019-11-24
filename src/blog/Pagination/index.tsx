import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex, TextLink } from '../../components';
import { Theme } from '../../utils';
// @ts-ignore
import WideArrow from '../../../static/wide-arrow.svg';

type directionType = 'left' | 'right';

interface TextLinkArrowProps {
  href: string;
  direction: directionType;
}

interface TextLinkArrowComponent extends React.FunctionComponent<TextLinkArrowProps> {
  Container: any;
  TextLink: any;
}

const TextLinkArrow: TextLinkArrowComponent = ({ href, children, direction }) => (
  <TextLinkArrow.Container href={href}>
    <TextLinkArrow.TextLink direction={direction} modifiers={['black']}>
      {children}
      <WideArrow />
    </TextLinkArrow.TextLink>
  </TextLinkArrow.Container>
);
TextLinkArrow.TextLink = styled(TextLink)<{ direction: directionType }>`
  position: relative;
  padding-left: ${props => (props.direction === 'left' ? Theme.space.regular : 0)}px;
  padding-right: ${props => (props.direction === 'right' ? Theme.space.regular : 0)}px;

  svg {
    position: absolute;
    left: ${props => (props.direction === 'left' ? 0 : 'initial')};
    right: ${props => (props.direction === 'right' ? 0 : 'initial')};
    top: 50%;
    margin-top: -5px;
    width: 13px;
    height: auto;
    transform: ${props => (props.direction === 'left' ? 'rotate(180deg)' : 'rotate(0deg)')};
    
    path {
      stroke: ${Theme.colors.black};
    }
  }
`;

TextLinkArrow.Container = styled(Link)``;

export interface PaginationSlugs {
  next: string | undefined | null;
  previous: string | undefined | null;
}

interface PaginationProps extends PaginationSlugs {
  mb: string[];
};

interface PaginationComponent extends React.FunctionComponent<PaginationProps> {
  Container: any;
}

const Pagination: PaginationComponent = ({ previous, next, ...props }) => {
  return (
    <Pagination.Container {...props}>
      {previous ? (
        <TextLinkArrow direction="left" href={`/blog/${previous}`}>
          Poprzedni
        </TextLinkArrow>
      ) : (
        <div />
      )}
      {next ? (
        <TextLinkArrow direction="right" href={`/blog/${next}`}>
          Następny
        </TextLinkArrow>
      ) : (
        <div />
      )}
    </Pagination.Container>
  );
};

Pagination.Container = styled(Flex)`
  justify-content: space-between;
`;

export default Pagination;
