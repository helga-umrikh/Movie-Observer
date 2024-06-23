import React, { ChangeEvent, FC } from 'react'
import styles from './styles.module.scss'
import List from '@mui/material/List'
import { MovieItem } from '../MovieItem/MovieItem'
import { IMoviesInfo } from '../../interfaces/IMovieInfo'
import { IMoviesData } from '../../interfaces/IMoviesState'
import Pagination from '@mui/material/Pagination'
import { observer } from 'mobx-react-lite'
import { CircularProgress, Typography } from '@mui/material'
import { store } from '../../store/store'

type moviesListProps = {
    data: IMoviesData
}

const MoviesList: FC<moviesListProps> = observer(({ data }) => {
    return (
        <List className={styles.moviesList}>
            {data && data.docs ? (
                data.docs.length > 0 ? (
                    <div>
                        {data.docs?.map((item: IMoviesInfo) => {
                            return <MovieItem movieDocs={item} />
                        })}
                    </div>
                ) : (
                    <div className={styles.moviesList__message}>
                        <Typography variant="h2">Нет данных</Typography>
                        <Typography variant="subtitle2">
                            По вашему запросу ничего не найдено
                        </Typography>
                    </div>
                )
            ) : (
                <div className={styles.moviesList__spinner}>
                    <CircularProgress color="secondary" />
                </div>
            )}
            <Pagination
                defaultPage={1}
                count={data?.pages}
                disabled={data?.pages === 1}
                variant="outlined"
                className={styles.moviesList__pagination}
                onChange={(event: ChangeEvent<unknown>, page: number) => {
                    store.changePage(page)
                }}
            />
        </List>
    )
})

export default MoviesList
