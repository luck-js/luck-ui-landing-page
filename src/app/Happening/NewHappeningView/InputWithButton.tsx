import styled from 'styled-components';
import { Box, BaseButton, Input } from '../../../components';
import { Theme } from '../../../utils';
// @ts-ignore
import WideArrow from '../../../../public/static/wide-arrow.svg';

export const InputWithButton = ({ value, onChange, onClick, onKeyPress, label, disabled }: any) => {
  return (
    <InputWithButton.Container>
      <InputWithButton.Input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type="text"
        label={label}
      />
      <InputWithButton.Button
        disabled={disabled}
        onClick={onClick}
        onMouseDown={(e: any) => e.preventDefault()}
      >
        <WideArrow />
      </InputWithButton.Button>
    </InputWithButton.Container>
  );
};

InputWithButton.Container = styled(Box)`
  position: relative;
`;

InputWithButton.Input = styled(Input)`
  width: 100%;
  padding-right: 60px;
`;

InputWithButton.Button = styled(BaseButton)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 5px 12px 5px 12px;
  margin: 5px 0;
  transition: transform 0.5s;

  svg {
    width: auto;
    height: 14px;

    path {
      transition: stroke 0.5s;
      stroke: ${(props) => (props.disabled ? Theme.colors.gray2 : Theme.colors.darkGray)};
    }
  }
`;
