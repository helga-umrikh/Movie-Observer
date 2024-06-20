import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import MoviesList from '../../components/MoviesList/MoviesList'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import { fetchKinopoiskAPI } from '../../api/MoviesAPI'

const MainPage = observer(() => {
    useEffect(() => {
        const getData = async () => {
            const movies = await fetchKinopoiskAPI({
                apiVersion: 'v1.4',
                apiKey: '',
                path: '/movie',
                params: { page: store.state.moviesData.page, limit: 50 },
            })
            store.setMoviesData(movies)
        }

        getData()
    }, [store.state.moviesData.page])

    return (
        <div className={styles.mainPage}>
            <MoviesList data={store.state.moviesData} />
        </div>
    )
})

export { MainPage }
