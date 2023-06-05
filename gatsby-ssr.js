import './src/styles/global.css'
import * as React from 'react'
import Layout from './src/components/layout'

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `es-MX` })
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  )

}
