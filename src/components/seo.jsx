import * as React from 'react'

export default function Seo({ title, children, description }) {
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
