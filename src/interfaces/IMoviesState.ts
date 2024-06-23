import { IMoviesInfo } from './IMovieInfo'

export interface IMoviesArray extends Array<IMoviesInfo> {}

export type FiltersType = {
    'genres.name': string[] | null
    'rating.imdb': number[] | null
    year: string[] | null
}

export interface IMoviesData {
    docs: IMoviesArray
    total: number
    limit?: number
    page: number
    pages: number
}

export interface IMoviesState {
    moviesData: IMoviesData
    favorites: IMoviesData
    filters: FiltersType
    genresLabels: string[]
}
