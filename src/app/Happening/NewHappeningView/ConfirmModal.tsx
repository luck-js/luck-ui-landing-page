import * as React from "react"
import {Box, Button, CanonApp, InputApp, Modal} from "../../../components"
import styled from "styled-components"
import {Theme} from "../../../utils"

interface ConfirmModalProps {
  shouldBeOpen: any;
  onConfirm: any;
}

interface ConfirmModalComponent extends React.FunctionComponent<ConfirmModalProps> {
  Container: any;
  Header: any;
  Button: any;
  Text: any;
}

const ConfirmModal: ConfirmModalComponent = ({shouldBeOpen, onConfirm}) => {
  return (
    <Modal shouldBeOpen={shouldBeOpen} onClose={() => onConfirm(false)} >
      <ConfirmModal.Container>
        <ConfirmModal.Header mb={['small', 'small', 'medium', 'medium']}>Chcesz przywrócić dane?</ConfirmModal.Header>
        <ConfirmModal.Text mb={['regular', 'regular', 'xregular', 'xregular']}>Zauważyliśmy, że tworzyłeś już wydarzenie. Możemy je dla Ciebie wygrzebać.<br/> Co Ty na to, przywracamy?</ConfirmModal.Text>
        <ConfirmModal.Button colorfull onClick={() => onConfirm(false)} onMouseDown={(e: any) => e.preventDefault()}>Nie</ConfirmModal.Button>
        <ConfirmModal.Button modifiers={['contrast']} colorfull onClick={() => onConfirm(true)} onMouseDown={(e: any) => e.preventDefault()}>Tak</ConfirmModal.Button>
      </ConfirmModal.Container>
    </Modal>
  )
}

ConfirmModal.Header = styled(CanonApp)`
  
`;

ConfirmModal.Text = styled(InputApp)`
  line-height: 1.4;
`;

ConfirmModal.Button = styled(Button).attrs({ ...Theme.textStyles.smallText })``;

ConfirmModal.Container = styled(Box)`
  // padding: 0 ${Theme.space.small}px ${Theme.space.small}px ${Theme.space.small}px;
  color: ${Theme.colors.black};
  text-align: center;
  
  ${ConfirmModal.Button}{
    &:first-of-type{
      margin-right: ${Theme.space.xxsmall}px;
    }
    
    &:last-of-type{
      margin-left: ${Theme.space.xxsmall}px;
    }
  }
`;

export default ConfirmModal
