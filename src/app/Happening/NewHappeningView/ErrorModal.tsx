import * as React from "react"
import {Box, Button, CanonApp, InputApp, Modal} from "../../../components"
import styled from "styled-components"
import {Theme} from "../../../utils"

interface ErrorModalProps {
  shouldBeOpen: any;
  onClose: () => void;
  onMainButtonClick: () => void;
}

interface ErrorModalComponent extends React.FunctionComponent<ErrorModalProps> {
  Container: any;
  Header: any;
  Button: any;
  Text: any;
}

const ErrorModal: ErrorModalComponent = ({shouldBeOpen, onClose, onMainButtonClick}) => {
  return (
    <Modal shouldBeOpen={shouldBeOpen} onClose={() => onClose()} >
      <ErrorModal.Container>
        <ErrorModal.Header mb={['small', 'small', 'medium', 'medium']}>Błąd Serwera</ErrorModal.Header>
        <ErrorModal.Text mb={['regular', 'regular', 'xregular', 'xregular']}>Nie oczekiwany błąd serwera. Spróbuj jescze raz.</ErrorModal.Text>
        <ErrorModal.Button colorfull onClick={() => onClose()} onMouseDown={(e: any) => e.preventDefault()}>Anuluj</ErrorModal.Button>
        <ErrorModal.Button modifiers={['contrast']} colorfull onClick={() => onMainButtonClick()} onMouseDown={(e: any) => e.preventDefault()}>Jeszcze raz</ErrorModal.Button>
      </ErrorModal.Container>
    </Modal>
  )
}

ErrorModal.Header = styled(CanonApp)`
  
`;

ErrorModal.Text = styled(InputApp)`
  line-height: 1.4;
`;

ErrorModal.Button = styled(Button).attrs({ ...Theme.textStyles.smallText })``;

ErrorModal.Container = styled(Box)`
  color: ${Theme.colors.black};
  text-align: center;
  
  ${ErrorModal.Button}{
    &:first-of-type{
      margin-right: ${Theme.space.xxsmall}px;
    }
    
    &:last-of-type{
      margin-left: ${Theme.space.xxsmall}px;
    }
  }
`;

export default ErrorModal
