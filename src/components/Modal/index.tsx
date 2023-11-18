import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { Theme } from '../../utils';

// @ts-ignore
import Close from '../../../public/static/close.svg';
import { BaseButton } from '../Button';
import { Flex } from '../Flex';
import { FunctionComponent } from '../../utils/function-component.interface';

interface ModalProps {
  shouldBeOpen: boolean;
  onClose: any;
}

interface ModalComponent extends FunctionComponent<ModalProps> {
  Overlay: any;
  Container: any;
  ContentContainer: any;
  Header: any;
  Button: any;
  Content: any;
}

export const Modal: ModalComponent = ({ children, shouldBeOpen, onClose }) => {
  return (
    <Modal.Container shouldBeOpen={shouldBeOpen}>
      <Modal.Overlay />
      <Modal.ContentContainer>
        <Modal.Header>
          <Modal.Button onClick={onClose} onMouseDown={(e: any) => e.preventDefault()}>
            <Close />
          </Modal.Button>
        </Modal.Header>
        <Modal.Content>{children}</Modal.Content>
      </Modal.ContentContainer>
    </Modal.Container>
  );
};

Modal.Header = styled(Flex)`
  justify-content: flex-end;
  padding: ${Theme.space.small}px;
`;

Modal.Button = styled(BaseButton)`
  cursor: pointer;
  width: 14px;
  height: 14px;

  svg {
    height: 100%;
    width: auto;
    path {
      stroke: ${Theme.colors.black};
    }
  }
`;

Modal.Content = styled(Box)`
  padding: 0 ${Theme.space.regular}px ${Theme.space.regular}px ${Theme.space.regular}px;
`;

Modal.ContentContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Theme.colors.main};
  border-radius: 11px;
  max-width: 364px;
  width: 100%;
`;

Modal.Overlay = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.black};
  opacity: 0.6;
`;

Modal.Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${(props) => (props.shouldBeOpen ? 100 : -1)};
  opacity: ${(props) => (props.shouldBeOpen ? 1 : 0)};
  transition: opacity 0.5s;

  ${Modal.Content} {
    display: ${(props) => (props.shouldBeOpen ? 'block' : 'none')};
  }
`;
