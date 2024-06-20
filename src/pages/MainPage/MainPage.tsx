import React, { useEffect } from 'react'
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
                params: { page: 1, limit: 50 },
            })
            store.setMoviesData(movies)
        }

        getData()
    }, [])

    return (
        <div className={styles.mainPage}>
            <MoviesList data={store.state.moviesData} />
        </div>
    )
})

export { MainPage }
