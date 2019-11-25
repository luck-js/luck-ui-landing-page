import React from "react"

interface PreviewHappeningSectionData {
  name: string;
}

interface PreviewHappeningSectionProps extends PreviewHappeningSectionData{

}

interface PreviewHappeningSectionPage<P = PreviewHappeningSectionProps> extends React.FunctionComponent<P> {
}

const Index:PreviewHappeningSectionPage = ({name}) => {
  return (
    <p>Test: {name}</p>
  )
}

export default Index
