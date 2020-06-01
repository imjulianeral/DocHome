import React from 'react'
import { AuthCheck } from 'reactfire'
import { Redirect } from '@reach/router'
import { Paper, Container, Typography } from '@material-ui/core'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FirebaseUI from '../components/FirebaseUI'

const IndexPage = () => (
  <Layout>
    <SEO title="Crear Cuenta" />
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ marginTop: '5rem', padding: '1rem' }}>
        <Typography variant="h5">Crear Cuenta</Typography>

        <AuthCheck fallback={<FirebaseUI />}>
          <Redirect to="/app/page-2/" noThrow />
        </AuthCheck>
      </Paper>
    </Container>
  </Layout>
)

export default IndexPage
