import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import BottomNav from './Navs/BottomNav'
import AdminNav from './Navs/AdminNav'
import DocNav from './Navs/DocNav'

import useProfile from '../hooks/useProfile'

import 'normalize.css'

const Layout = ({ children }) => {
  const profile = useProfile()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      {profile.type === 'Admin' ? (
        <AdminNav user={profile} />
      ) : profile.type === 'Doctor' ? (
        <DocNav user={profile} />
      ) : (
        profile.type === 'Paciente' && <BottomNav user={profile} />
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
