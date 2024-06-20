import React from 'react'
import styles from './styles.module.scss'
import { Header as HeaderComponent } from 'antd/es/layout/layout'
import { Avatar, Typography } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import { NavigationButton } from '../NavigationButton/NavigationButton'
const { Title } = Typography

const Header = () => {
    const location = useLocation()
    const currentPath = location.pathname
    return (
        <HeaderComponent className={styles.header}>
            <div>
                <Link to={'/'}>
                    <Avatar
                        className={styles.header__avatar}
                        src={'../assets/film.svg'}
                        alt="movie observer app"
                    />
                </Link>
                <Link to={'/'}>
                    <Title className={styles.header__title}>
                        Movie Observer
                    </Title>
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
        </HeaderComponent>
    )
}

export { Header }
