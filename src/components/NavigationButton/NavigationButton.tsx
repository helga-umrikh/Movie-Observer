import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

interface NavigationButtonProps {
    route: string
}

const NavigationButton: FC<NavigationButtonProps> = ({ route }) => {
    return (
        <Link to={`${route}`}>
            <Button className={styles.navigationButton} size="large">
                Назад
            </Button>
        </Link>
    )
}

export { NavigationButton }
