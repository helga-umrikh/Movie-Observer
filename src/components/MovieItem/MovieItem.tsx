import React, { FC } from 'react'
import styles from './styles.module.scss'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IMoviesInfo } from '../../interfaces/IMovieInfo'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone'
import { store } from '../../store/store'

import { observer } from 'mobx-react-lite'

interface MovieItemProps {
    movieDocs: IMoviesInfo
}

const MovieItem: FC<MovieItemProps> = observer(({ movieDocs }) => {
    return (
        <ListItem className={styles.listItem}>
            <div className={styles.listItem__container}>
                {movieDocs.poster ? (
                    <Avatar
                        className={styles.listItem__avatar}
                        src={movieDocs.poster.url}
                    />
                ) : (
                    <Avatar
                        className={styles.listItem__avatar}
                        src={'../../assets/film.png'}
                    />
                )}
                <div>
                    <Typography
                        className={styles.listItem__movieName}
                        variant="h6"
                    >
                        {movieDocs.name || movieDocs.alternativeName}
                    </Typography>
                    <Typography
                        className={styles.listItem__year}
                    >{`${movieDocs.year}г.`}</Typography>
                </div>
                <div className={styles.listItem__ratingAndButton}>
                    <Typography className={styles.rating}>
                        {movieDocs.rating.imdb.toFixed(1)}
                        <StarRateTwoToneIcon />
                    </Typography>
                    <div className={styles.listItem__buttons}>
                        <Button
                            onClick={() => {
                                store.actionFavorites(
                                    movieDocs,
                                    store.state.favorites.docs?.includes(
                                        movieDocs
                                    )
                                )
                            }}
                        >
                            {store.state.favorites.docs?.includes(movieDocs) ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                        <Link to={`movie/${movieDocs.id}`}>
                            <Button
                                className={styles.listItem__button}
                                variant="contained"
                                size="large"
                            >
                                Подробнее
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </ListItem>
    )
})

export { MovieItem }
