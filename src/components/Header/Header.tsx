import React from 'react'
import styles from './styles.module.scss'
import { Header as HeaderComponent } from 'antd/es/layout/layout'
import { Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
const { Title } = Typography

const Header = () => {
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
        </HeaderComponent>
    )
}

export { Header }
