import React, { useState } from 'react'
import { Link } from 'gatsby'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Event, PersonPin } from '@material-ui/icons'
import { navBottomStyles } from '../Material/Material.config'

export default function DocNav({ user }) {
  const [value, setValue] = useState(3)
  const classes = navBottomStyles()

  if (user === null) return null
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        // onMouseEnter={() => setValue(2)}
        component={Link}
        to={'/app/citas'}
        label="Citas"
        icon={<Event />}
      />
      <BottomNavigationAction
        // onMouseEnter={() => setValue(3)}
        component={Link}
        to={'/app/perfil'}
        label="Perfil"
        icon={<PersonPin />}
      />
    </BottomNavigation>
  )
}
