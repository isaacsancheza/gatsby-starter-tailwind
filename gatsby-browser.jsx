import './src/styles/global.css'
import * as React from 'react'

import Layout from './src/components/layout'

export const wrapPageElement = ({element, props}) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  )
}
