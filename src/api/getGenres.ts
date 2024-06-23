import { GenresFilter } from '../interfaces/IFilters'
import { store } from '../store/store'
import { fetchKinopoiskAPI } from './MoviesAPI'

export const getGenres = async () => {
    const genresResponse = await fetchKinopoiskAPI({
        apiVersion: 'v1',
        apiKey: process.env.REACT_APP_ACCESS_KEY,
        path: '/movie/possible-values-by-field',
        params: { field: 'genres.name' },
    })
    const genresValues = genresResponse.map((i: GenresFilter) => i.name)
    store.addGenresNames(genresValues)
}
