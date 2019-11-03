import React, { Fragment } from 'react';
import CardMobile from './CardMobile';
import CardDesktop from "./CardDesktop"
import {ViewPost} from "../../pages/blog"

const Card: React.FunctionComponent<ViewPost> = ({ ...props }) => (
  <Fragment>
    <CardMobile display={['flex', 'flex', 'none']} {...props} />
    <CardDesktop display={['none', 'none', 'block']} {...props} />
  </Fragment>
);

export default Card;
