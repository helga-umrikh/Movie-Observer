import React, { FC } from 'react'
import styles from './styles.module.scss'
import List from '@mui/material/List'
import { MovieItem } from '../MovieItem/MovieItem'
import { IMoviesInfo } from '../../interfaces/IMovieInfo'
import { IMoviesData } from '../../interfaces/IMoviesState'
import Pagination from '@mui/material/Pagination'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Skeleton } from '@mui/material'

type moviesListProps = {
    data: IMoviesData
}

const MoviesList: FC<moviesListProps> = observer(({ data }) => {
    return (
        <List className={styles.moviesList}>
            {data ? (
                <div>
                    {data.docs?.map((item: IMoviesInfo) => {
                        return <MovieItem movieDocs={item} />
                    })}
                </div>
            ) : (
                <div className={styles.moviesList__spinner}>
                    <CircularProgress color="secondary" />
                </div>
            )}
            <Pagination
                count={data?.pages}
                variant="outlined"
                className={styles.moviesList__pagination}
            />
        </List>
    )
})

export default MoviesList
