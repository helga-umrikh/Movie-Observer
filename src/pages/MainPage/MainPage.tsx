import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import MoviesList from '../../components/MoviesList/MoviesList'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import { fetchKinopoiskAPI } from '../../api/MoviesAPI'
import ActionPanel from '../../components/ActionPanel/ActionPanel'
import { GenresFilter } from '../../interfaces/IFilters'
import { Params } from '../../interfaces/IParams'

const MainPage = observer(() => {
    useEffect(() => {
        const getData = async () => {
            const params: Params = {
                page: store.state.moviesData.page,
                limit: 50,
            }
            if (store.state.filters.year) {
                params.year = `${store.state.filters.year[0]}-${store.state.filters.year[1]}`
            }

            if (store.state.filters['rating.imdb']) {
                params[
                    'rating.imdb'
                ] = `${store.state.filters['rating.imdb'][0]}-${store.state.filters['rating.imdb'][1]}`
            }

            if (store.state.filters['genres.name']) {
                params['genres.name'] = store.state.filters['genres.name']
            }

            const movies = await fetchKinopoiskAPI({
                apiVersion: 'v1.4',
                apiKey: '',
                path: '/movie',
                params,
            })
            store.setMoviesData(movies)
        }
        const getGenres = async () => {
            const genresResponse = await fetchKinopoiskAPI({
                apiVersion: 'v1',
                apiKey: '',
                path: '/movie/possible-values-by-field',
                params: { field: 'genres.name' },
            })
            const genresValues = genresResponse.map((i: GenresFilter) => i.name)
            store.addGenresNames(genresValues)
        }

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
