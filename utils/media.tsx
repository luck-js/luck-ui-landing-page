import {generateMedia} from "styled-media-query"
import * as theme from "./Theme";

export default generateMedia({
  mobile: theme.breakpoints[0],
  tablet: theme.breakpoints[1],
  desktop: theme.breakpoints[2],
  wideDesktop: theme.breakpoints[3],
})
