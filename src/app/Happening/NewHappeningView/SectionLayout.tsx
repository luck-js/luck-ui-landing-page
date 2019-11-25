import styled from "styled-components"
import {Flex, NAVIGATION_DESKTOP_HEIGHT, NAVIGATION_HEIGHT} from "../../../components"
import {Theme} from "../../../utils"
import media from "../../../utils/media"
import {BubblesNarrowBackground} from "../../BubblesNarrowBackground"
const SPACE = 10;
const CONTAINER_BOTTOM_PADDING = [NAVIGATION_HEIGHT + SPACE, NAVIGATION_HEIGHT + SPACE, NAVIGATION_DESKTOP_HEIGHT + SPACE];
const BUTTON_CONTAINER_MIN_HEIGHTS = [101, 101, 125];
export const ContentContainer = styled(Flex)`
  flex-direction: column;
  overflow: hidden;
  padding: 0 ${Theme.space.small}px ${BUTTON_CONTAINER_MIN_HEIGHTS[0] + CONTAINER_BOTTOM_PADDING[0]}px  ${Theme.space.small}px;
  margin: 0 auto;

  color: ${Theme.colors.black};
  text-align: center;
     
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: 0 ${Theme.space.small}px ${BUTTON_CONTAINER_MIN_HEIGHTS[2] + CONTAINER_BOTTOM_PADDING[2]}px  ${Theme.space.small}px;
    max-width: 558px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

export const ButtonContainer = styled(Flex)`
  min-height: ${BUTTON_CONTAINER_MIN_HEIGHTS[0]}px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: ${Theme.space.small}px ${Theme.space.small}px 0;
  background-color: ${Theme.colors.main};
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 558px;
    left: 50%;
    transform: translateX(-50%);
    min-height: ${BUTTON_CONTAINER_MIN_HEIGHTS[2]}px;
  `}
  
  ${media.greaterThan('desktop')`
  
  `}
`;

export const SectionBackground = styled(BubblesNarrowBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100%;
`;
