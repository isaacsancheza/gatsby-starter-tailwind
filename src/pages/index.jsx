import * as React from 'react'

import {graphql} from 'gatsby'

import Seo from '../components/seo'

export default function IndexPage() {
  return (
    <>
    </>
  )
}

export const Head = ({data, location}) => {
  const {site} = data
  return (
    <Seo 
      title={site.siteMetadata.title} 
      description={site.siteMetadata.description}     
      pagePath={location.pathname}
    />
  )
}

export const query =  graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
