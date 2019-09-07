import styled from 'styled-components';
import media from '../../utils/media';

const Content = styled('div')`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 15px 0px 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  
  ${media.greaterThan('mobile')`
    max-width: 550px;
    padding: 40px 15px 0px 15px;
  `}
  
  ${media.greaterThan('tablet')`
    max-width: 900px;
    padding: 60px 15px 0px 15px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1200px;
    padding: 70px 15px 0px 15px;
  `}
`;

export default Content;
