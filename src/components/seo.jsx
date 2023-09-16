import * as React from 'react'

export default function Seo({title, pagePath, children, description}) {
  const url = data.site.siteMetadata.siteUrl + pagePath
  return (
    <>
      <title>
        {title}
      </title>
      
      <meta name="description" content={description} />
      
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {children}
    </>
  )
}
