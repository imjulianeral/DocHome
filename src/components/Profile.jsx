import React from 'react'

import useProfile from '../hooks/useProfile'
import useChildren from '../hooks/useChildren'

import SEO from './SEO'
import ProfileData from './ProfileData'
import ProfileForm from './UserForm/ProfileForm'

export default function Profile() {
  const profile = useProfile()
  const children = useChildren()

  return (
    <>
      <SEO title="Perfil" />

      {typeof profile === 'undefined' ? (
        <ProfileForm />
      ) : (
        <ProfileData user={profile} children={children} />
      )}
    </>
  )
}
