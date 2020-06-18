import React from 'react'
import { Link } from 'gatsby'
import {} from 'reactfire'
import {
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grow,
  Avatar,
} from '@material-ui/core'
import { avatarStyles } from '../Material/Material.config'

import useDoctors from '../../hooks/useDoctors'
import useProfile from '../../hooks/useProfile'

import SEO from '../SEO'
import Spinner from '../Spinner'
import Status from '../Admin/Status'

export default function DoctorsList() {
  const profile = useProfile()
  const doctors = useDoctors(profile, 'createdAt')
  const classes = avatarStyles()

  if (!profile) return <Spinner />
  return (
    <Container maxWidth="xs" style={{ marginTop: '7rem' }}>
      <SEO title="Doctores" />

      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Paper variant="outlined">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} lg={12}>
              <List>
                {doctors.map(doctor => (
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    key={doctor.id}
                  >
                    <Grid item xs={profile.type === 'Admin' ? 10 : 12}>
                      <ListItem
                        button
                        key={doctor.id}
                        component={Link}
                        to={`/app/doctor/${doctor.id}`}
                      >
                        <ListItemAvatar>
                          <Avatar
                            src={doctor.avatar}
                            className={classes.medium}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Nombre"
                          secondary={doctor.name}
                        />
                        <ListItemText
                          primary="Logros"
                          secondary={doctor.features.length}
                        />
                      </ListItem>
                    </Grid>
                    {profile.type === 'Admin' && (
                      <Grid item xs={2}>
                        <Status STATUS={doctor.status} ID={doctor.id} />
                      </Grid>
                    )}
                  </Grid>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </Container>
  )
}
