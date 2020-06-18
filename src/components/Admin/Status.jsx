import React from 'react'

import { useFirestore } from 'reactfire'

import { Switch } from '@material-ui/core'

export default function Status({ STATUS, ID }) {
  const firestore = useFirestore()
  const handleChange = async (status, id) => {
    const db = await firestore.doc(`users/${id}`)
    if (status === 'PENDIENTE' || status === 'ELIMINADO') {
      db.update({
        status: 'ACTIVADO',
      })
    } else {
      db.update({
        status: 'ELIMINADO',
      })
    }
  }
  return (
    <Switch
      checked={STATUS === 'PENDIENTE' || STATUS === 'ELIMINADO' ? false : true}
      onChange={() => handleChange(STATUS, ID)}
      color="primary"
      name="status"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  )
}
