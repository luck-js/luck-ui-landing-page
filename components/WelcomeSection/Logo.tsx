import styled from 'styled-components';
import media from '../../utils/media';

const Logo = styled('img').attrs({alt: "Logo Luck"})`
  width: 115px;
  height: 115px;

  ${media.greaterThan('mobile')`
  
  `}
  
  ${media.greaterThan('tablet')`
    width: 130px;
    height: 130px;
  `}
  
  ${media.greaterThan('desktop')`
    width: 172px;
    height: 172px;
  `}
`;

export default Logo;
