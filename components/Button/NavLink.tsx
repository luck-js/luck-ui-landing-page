import Link from 'next/link';
import { Button } from './Button';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
import * as React from 'react';

const NavLink = ({ modifiers, href, ...props }: { modifiers?: string[]; href: string }) => {
  return (
    <NavLink.Container {...props}>
      <Link href={href}>
        <NavLink.Button hrezf={href} as={'a'} modifiers={modifiers}>
          Blog
        </NavLink.Button>
      </Link>
    </NavLink.Container>
  );
};

NavLink.Container = styled(BaseButton)``;
NavLink.Button = styled(Button)`
  text-transform: uppercase;
`;
export default NavLink;
