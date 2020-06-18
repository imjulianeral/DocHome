import React from 'react'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { theme } from '../components/Material/Material.config'
import { fireConfig } from './fireConfig'

import Spinner from '../components/Spinner'

export const wrapRootElement = ({ element }) => {
  if (typeof window === 'undefined') return <p>Loading...</p>
  return (
    <FirebaseAppProvider firebaseConfig={fireConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SuspenseWithPerf fallback={<Spinner />}>{element}</SuspenseWithPerf>
      </ThemeProvider>
    </FirebaseAppProvider>
  )
}
