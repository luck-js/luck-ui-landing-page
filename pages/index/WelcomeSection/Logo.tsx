import styled from 'styled-components';
import media from '../../../utils/media';

const Logo = styled('img')`
  width: 140px;
  height: 140px;

  ${media.greaterThan('mobile')`
    width: 220px;
    height: 220px;
  `}
  
  ${media.greaterThan('tablet')`
    width: 260px;
    height: 260px;
  `}
  
  ${media.greaterThan('desktop')`
    width: 300px;
    height: 300px;
  `}
`;

export default Logo;
