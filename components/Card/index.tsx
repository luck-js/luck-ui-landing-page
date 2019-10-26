import React, { Fragment } from 'react';
import CardMobile from './CardMobile';
import CardDesktop from "./CardDesktop"
import { Post } from '../../utils';

const Card: React.FunctionComponent<Post> = ({ ...props }) => (
  <Fragment>
    <CardMobile display={['flex', 'flex', 'none']} {...props} />
    <CardDesktop display={['none', 'none', 'block']} {...props} />
  </Fragment>
);

export default Card;
