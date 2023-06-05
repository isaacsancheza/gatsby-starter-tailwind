import * as React from 'react'

function SEO({ title, children, description }) {
  return (
    <>
      <title>{ title }</title>
      <meta name="description" content={ description } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:type" content="website" />
      {children}
    </>
  )
}

export default SEO
