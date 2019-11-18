import React, {Fragment} from "react"
import ShareViewMobile from "./ShareViewMobile"
import ShareViewDesktop from "./ShareViewDesktop"
import {PublishedHappening} from "../model"

export interface ShareViewData {
  happening: PublishedHappening;
}

export interface ShareViewProps {
  data: ShareViewData;
  display: string[];
}

const Index: React.FunctionComponent<{data: ShareViewData}> = ({ ...props }) => (
  <Fragment>
    <ShareViewMobile display={['block', 'block', 'none']} {...props} />
    <ShareViewDesktop display={['none', 'none', 'block']} {...props} />
  </Fragment>
);

export default Index;
