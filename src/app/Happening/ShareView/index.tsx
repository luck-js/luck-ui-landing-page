import React, {Fragment} from "react"
import ShareViewMobile from "./ShareViewMobile"
import ShareViewDesktop from "./ShareViewDesktop"
import {PublishedHappening} from "../model"
import {PopupProvider} from "../../../components/Popup"

export interface ShareViewData {
  happening: PublishedHappening;
}

export interface ShareViewProps {
  data: ShareViewData;
  display: string[];
}

const Index: React.FunctionComponent<{data: ShareViewData}> = ({ ...props }) => (
  <Fragment>
    <PopupProvider>
      <ShareViewMobile display={['block', 'block', 'none']} {...props} />
      <ShareViewDesktop display={['none', 'none', 'block']} {...props} />
    </PopupProvider>
  </Fragment>
);

export default Index;
