import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

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

export  { NavigationButton }
