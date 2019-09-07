import styled from 'styled-components';
import media from '../../utils/media';

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
    width: 320px;
    height: 320px;
  `}
`;

export default Logo;
