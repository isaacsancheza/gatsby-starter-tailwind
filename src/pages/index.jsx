import * as React from 'react'

import Seo from '../components/seo'

export default function IndexPage() {
  return (
    <>
    </>
  )
}

export const Head = ({location}) => {
  return (
    <Seo 
      title=""
      description=""
      pagePath={location.pathname}
    />
  )
}
