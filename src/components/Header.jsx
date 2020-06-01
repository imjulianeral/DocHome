import { Link } from 'gatsby'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useAuth } from 'reactfire'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
} from '@material-ui/core'
import { AccountCircle, Face, PersonAdd, ExitToApp } from '@material-ui/icons'
import { headerStyles } from './Material/Material.config'

import useProfile from '../hooks/useProfile'

const Header = ({ siteTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const auth = useAuth()
  const profile = useProfile()
  const classes = headerStyles()
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const signOut = async () => {
    await auth.signOut()
  }
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button component={Link} to="/" className={classes.btn}>
            {siteTitle}
          </Button>
        </Typography>
        {auth.currentUser ? (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar
                alt={auth.currentUser.displayName}
                src={auth.currentUser.photoURL}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {profile.type !== 'Admin' && (
                <Link
                  to="/app/perfil"
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Face color="primary" fontSize="small" />
                    </ListItemIcon>
                    Perfil
                  </MenuItem>
                </Link>
              )}
              <Link
                to="/"
                onClick={signOut}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ExitToApp color="primary" fontSize="small" />
                  </ListItemIcon>
                  Cerrar Sesión
                </MenuItem>
              </Link>
            </Menu>
          </>
        ) : (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Face color="primary" fontSize="small" />
                  </ListItemIcon>
                  Iniciar Sesión
                </MenuItem>
              </Link>
              <Link
                to="/crear-cuenta"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd color="primary" fontSize="small" />
                  </ListItemIcon>
                  Crear Cuenta
                </MenuItem>
              </Link>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
