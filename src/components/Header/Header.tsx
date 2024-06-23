import React from 'react'
import styles from './styles.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import { NavigationButton } from '../NavigationButton/NavigationButton'

const Header = () => {
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <AppBar position="static" className={styles.header}>
            <Toolbar>
                <div className={styles.header__logoTitle}>
                    <Link to={'/'}>
                        <Avatar
                            className={styles.header__avatar}
                            src={'../assets/film.svg'}
                            alt="movie observer app"
                        />
                    </Link>
                    <Link to={'/'}>
                        <Typography
                            variant={'h4'}
                            className={styles.header__title}
                        >
                            Movie Observer
                        </Typography>
                    </Link>
                </div>
                <div>
                    {currentPath !== '/favorites' && (
                        <Link to={'/favorites'}>
                            <Button
                                variant="text"
                                className={styles.header__button_favorite}
                            >
                                Favorites
                                <span className={styles.button__icon}>
                                    <FavoriteTwoToneIcon />
                                </span>
                            </Button>
                        </Link>
                    )}
                    <NavigationButton route="/" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export { Header }
