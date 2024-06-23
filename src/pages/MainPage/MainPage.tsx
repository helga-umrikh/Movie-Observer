import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import MoviesList from '../../components/MoviesList/MoviesList'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import ActionPanel from '../../components/ActionPanel/ActionPanel'
import { getData } from '../../api/getData'
import { getGenres } from '../../api/getGenres'

const MainPage = observer(() => {
    useEffect(() => {
        getData()
        getGenres()
    }, [
        store.state.moviesData.page,
        store.state.filters.year,
        store.state.filters['rating.imdb'],
        store.state.filters['genres.name'],
    ])
    return (
        <div className={styles.mainPage}>
            <ActionPanel />
            <MoviesList data={store.state.moviesData} />
        </div>
    )
})

export { MainPage }
