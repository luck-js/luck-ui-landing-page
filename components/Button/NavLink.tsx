import Link from 'next/link';
import { Button } from './Button';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
import * as React from 'react';
import {ModifierKeys} from "styled-components-modifiers"

const NavLink = ({ modifiers, href, ariaLabel, ...props }: { modifiers?: ModifierKeys; href: string, ariaLabel: string }) => {
  return (
    <NavLink.Container {...props}>
      <Link href={href}>
        <NavLink.Button onMouseDown={(e:any) => e.preventDefault()} href={href} ariaLabel={ariaLabel} as={'a'} modifiers={modifiers}>
          Blog
        </NavLink.Button>
      </Link>
    </NavLink.Container>
  );
};

NavLink.Container = styled(BaseButton)``;
NavLink.Button = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`;
export default NavLink;
