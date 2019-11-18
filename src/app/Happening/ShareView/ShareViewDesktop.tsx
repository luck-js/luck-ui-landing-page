import React, {useState} from 'react';
import CopyToClipboard from "react-copy-to-clipboard"
import styled from 'styled-components';
import { ShareViewProps } from './index';
import { Participant } from '../model';
import { Theme } from '../../../utils';
import { CanonApp, BaseButton, Box, Flex } from '../../../components';
// @ts-ignore
import Copy from '../../../../static/copy.svg';
// @ts-ignore
import WideArrow from '../../../../static/wide-arrow.svg';

const ShareRow = ({ participant }: { participant: Participant }) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleOnCopy = () => setIsCopied(true)
  return (
    <ShareRow.Container isCopied={isCopied}>
      <ShareRow.Element {...Theme.textStyles.inputApp} className="name">
        {participant.name}
      </ShareRow.Element>
      <CopyToClipboard text={participant.uniqueLink} onCopy={handleOnCopy}>
        <ShareRow.Element {...Theme.textStyles.buttonApp} className="uniqueLink">
          <WideArrow className="wideArrow" />
          <span>{participant.uniqueLink}</span>
          <ShareRow.Button onMouseDown={(e: any) => e.preventDefault()}>
            <Copy />
          </ShareRow.Button>
        </ShareRow.Element>
      </CopyToClipboard>
    </ShareRow.Container>
  );
};

ShareRow.Element = styled(Box)`
  flex: 0 1 50%;

  background-color: ${Theme.colors.darkMain2};
  border-radius: 30px;
  height: 53px;

  color: ${Theme.colors.black};

  transition: width 1s, margin-right 1s, margin-left 1s, padding-right 1s, padding-left 1s,
    flex-basis 1s, flex-grow 1s, flex-basis 1s, background-color 0.5s;
  text-align: left;

  &.name {
    margin: 7px 15px 7px 0;
    padding: 16px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &.uniqueLink {
    position: relative;
    margin: 7px 0 7px 15px;

    text-overflow: ellipsis;
    white-space: nowrap;
    
    span {
      overflow: hidden;
      position: absolute;
      display: block;
      width: 100%;
      padding: 18px 20px;
    }
  }

  .wideArrow {
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -6px;
    width: 13px;
    transform: rotate(270deg);
    transition: left 1s;
  }
`;

ShareRow.Container = styled(Flex)<{isCopied: boolean}>`
  ${ShareRow.Element}{
    background-color: ${props => props.isCopied ? Theme.colors.darkMain3 : Theme.colors.darkMain2};
  }
  
  :hover {
    ${ShareRow.Element}.name{
      flex: 1 1 40%;
    }
    ${ShareRow.Element}.uniqueLink{
      flex: 1 1 100%;
    }
    
    .wideArrow{
      left: -15px;
    }
  }
`;

ShareRow.Button = styled(BaseButton)`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0px 30px;
  border-radius: 30px;

  background-color: ${Theme.colors.mainContrast};

  box-shadow: -10px 0 20px 0 rgba(0, 0, 0, 0.2);
  transition: color 0.5s, background-color 0.5s, text-decoration-color 0.5s;

  &:hover {
    background-color: ${Theme.colors.darkMainContrast};

    svg {
      path {
        fill: ${Theme.colors.darkMain2};
      }
    }
  }

  svg {
    width: 28px;

    path {
      fill: ${Theme.colors.main};
    }
  }
`;

const ShareViewDesktop = ({ data: { happening }, ...props }: ShareViewProps) => {
  return (
    <ShareViewDesktop.Container {...props}>
      <CanonApp
        pt={['xregular', 'xregular', 'large', 'large']}
        mb={['regular', 'regular', 'large', 'large']}
      >
        UDOSTĘPNIJ LINKI
      </CanonApp>
      {happening.participants.map(participant => (
        <ShareRow participant={participant} />
      ))}
    </ShareViewDesktop.Container>
  );
};

ShareViewDesktop.Container = styled(Box)`
  margin: 0 auto;
  max-width: 700px;
  color: ${Theme.colors.black};
  text-align: center;
`;

export default ShareViewDesktop;
