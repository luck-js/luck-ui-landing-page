import styled from 'styled-components';
import { Input } from '../../Input';
import { Box } from '../../Box';
import { BaseButton } from '../../Button';
import { Theme } from '../../../utils';

// @ts-ignore
import Arrow from '../../../static/arrow.svg';

export const InputWithButton = ({
  value,
  onChange,
  onClick,
  onKeyPress,
  placeholder,
  disabled,
}: any) => {
  return (
    <InputWithButton.Container >
      <InputWithButton.Input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type="text"
        placeholder={placeholder}
      />
      <InputWithButton.Button disabled={disabled} onClick={onClick}>
        <Arrow />
      </InputWithButton.Button>
    </InputWithButton.Container >
  );
};

InputWithButton.Container = styled(Box)`
  position: relative;
`;

InputWithButton.Input = styled(Input)`
  padding-right: 60px;
`

InputWithButton.Button = styled(BaseButton)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  padding: 3px 12px 3px 12px;
  margin: 5px 0;
  transition: transform 0.5s;

  svg {
    width: 22px;
    height: auto;
    fill: ${props => props.disabled ? Theme.colors.gray2 : Theme.colors.darkGray};
  }
`;
