import { Params } from '../interfaces/IParams'
import { store } from '../store/store'
import { fetchKinopoiskAPI } from './MoviesAPI'

export const getData = async () => {
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
        apiKey: process.env.REACT_APP_ACCESS_KEY,
        path: '/movie',
        params,
    })
    store.setMoviesData(movies)
}
