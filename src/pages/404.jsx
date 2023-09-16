import * as React from 'react'

import Seo from '../components/seo'

export default function NotFoundPage() {
  return (
    <>
    </>
  )
}

export const Head = ({location}) => {
  return (
     <Seo 
        title="Página no encontrada" 
        description="Perdón, no encontramos la página que buscabas."
        pagePath={location.pathname}
  )
}
