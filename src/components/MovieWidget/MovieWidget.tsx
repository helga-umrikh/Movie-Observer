import React, { FC } from 'react'
import styles from './styles.module.scss'
import { NavigationButton } from '../NavigationButton/NavigationButton'
import { Genre, IMoviesInfo } from '../../interfaces/IMovieInfo'
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone'
import { Typography } from '@mui/material'
import { Avatar } from '@mui/material'
import Divider from '@mui/material/Divider'

type MovieWidgetProps = {
    data: IMoviesInfo | null
}

const MovieWidget: FC<MovieWidgetProps> = ({ data }) => {
    return (
        <div className={styles.movieWidget}>
            {false && (
                <div className={styles.movieWidget__spinner}>
                    {/* <Spin /> */}
                </div>
            )}
            {data && (
                <div className={styles.movieWidget__content}>
                    <Avatar
                        className={styles.movieWidget__avatar}
                        src={data.poster.url}
                    />
                    <div className={styles.movieWidget__generalInfo}>
                        <div className={styles.movieWidget__nameRating}>
                            <Typography
                                className={styles.movieWidget__name}
                                variant="h4"
                            >
                                {data.name ? data.name : data.alternativeName}
                            </Typography>
                            <Typography
                                className={styles.movieWidget__rating}
                                variant="h4"
                            >
                                {data.rating.kp.toFixed(1)}
                                <StarRateTwoToneIcon />
                            </Typography>
                        </div>
                        <Typography
                            className={styles.movieWidget__releaseDate}
                            variant="subtitle2"
                        >
                            {`${data.year}г.`}
                        </Typography>
                        <Divider />
                        <Typography className={styles.movieWidget__description}>
                            {data.description}
                        </Typography>
                        <div className={styles.movieWidget__genres}></div>
                        {data.genres?.map((item: Genre) => (
                            <Typography
                                className={styles.genres__item}
                                variant="subtitle2"
                            >
                                {`#${item.name}`}
                            </Typography>
                        ))}
                        <NavigationButton route="/" />
                    </div>
                </div>
            )}
            {false && <div>Error</div>}
        </div>
    )
}

export { MovieWidget }
