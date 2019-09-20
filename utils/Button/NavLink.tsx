import Link from 'next/link';
import { Button } from './Button';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
import * as React from 'react';

const NavLink = ({ modifiers, ...props }: { modifiers?: any; href: string }) => {
  return (
    <NavLink.Container>
      <Link {...props}>
        <Button as={'a'} modifiers={modifiers}>
          Blog
        </Button>
      </Link>
    </NavLink.Container>
  );
};

NavLink.Container = styled(BaseButton)``;
export default NavLink ;
