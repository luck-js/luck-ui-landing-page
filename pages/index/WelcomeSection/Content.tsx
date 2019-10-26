import styled from 'styled-components';
import media from '../../../utils/media';
import {Flex} from "../../../components"

const Content = styled(Flex)`
  max-width: 374px;
  margin: 0 auto;
  padding: 50px 40px 0px 40px;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  
  ${media.greaterThan('mobile')`
  
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 490px;
    padding: 60px 0px 0px 0px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 654px;
    padding: 70px 0px 0px 0px;
  `}
`;

export default Content;
