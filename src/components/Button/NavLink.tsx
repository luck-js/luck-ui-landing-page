import * as React from 'react';
import styled from 'styled-components';
import { ModifierKeys } from 'styled-components-modifiers';
import { Button } from './Button';
import { BaseButton } from './BaseButton';

export const NavLink = ({
  modifiers,
  href,
  ariaLabel,
  ...props
}: {
  modifiers?: ModifierKeys;
  href: string;
  ariaLabel: string;
}) => {
  return (
    <NavLink.Container {...props}>
        <NavLink.Button
          onMouseDown={(e: any) => e.preventDefault()}
          href={href}
          ariaLabel={ariaLabel}
          as={'a'}
          modifiers={modifiers}
        >
          Blog
        </NavLink.Button>
    </NavLink.Container>
  );
};

NavLink.Container = styled(BaseButton)``;
NavLink.Button = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`;

