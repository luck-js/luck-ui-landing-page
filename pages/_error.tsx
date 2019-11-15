import React from 'react'
import {ErrorProps} from "next/error"
import {NextPageContext} from "next"


interface ErrorPage<P = { statusCode: number }> extends React.FunctionComponent<P> {
  getInitialProps?: ({ res, err, }: NextPageContext) => Promise<ErrorProps> | ErrorProps;
}

const Error: ErrorPage = ({ statusCode }) => {
  return <Error statusCode={statusCode} />
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  if(statusCode === 404 && res) {
    res.writeHead(301, {
      Location: '/e404'
    })
    res.end()
  }
  return { statusCode: (statusCode  as number) }
}

export default Error
