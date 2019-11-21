import styled from 'styled-components';
import media from '../../utils/media';
import {Flex, NAVIGATION_DESKTOP_HEIGHT, NAVIGATION_HEIGHT} from '../../components';

const Content = styled(Flex)`
  max-width: 424px;
  align-content: space-between;
  margin: 0 auto;
  padding: ${NAVIGATION_HEIGHT + 50}px 40px 0px 40px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  
  ${media.greaterThan('mobile')`
  
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 540px;
    padding: ${NAVIGATION_DESKTOP_HEIGHT + 60}px 0px 0px 0px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 704px;
    padding: ${NAVIGATION_DESKTOP_HEIGHT + 70}px 0px 0px 0px;
  `}
`;

export default Content;
