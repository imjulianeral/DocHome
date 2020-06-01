import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Profile from '../components/Profile'

export default function app() {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute component={Profile} path="/perfil" />
      </Router>
    </Layout>
  )
}
