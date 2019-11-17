import React from 'react'
import Error, {ErrorProps} from "next/error"
import {NextPageContext} from "next"


interface MyErrorPage<P = { statusCode: number }> extends React.FunctionComponent<P> {
  getInitialProps?: ({ res, err, }: NextPageContext) => Promise<ErrorProps> | ErrorProps;
}

const MyError: MyErrorPage = ({ statusCode }) => {
  return <Error statusCode={statusCode} />
}

MyError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  if(statusCode === 404 && res) {
    res.writeHead(301, {
      Location: '/e404'
    })
    res.end()
  }
  return { statusCode: (statusCode  as number) }
}

export default MyError
