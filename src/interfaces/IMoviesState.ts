import { IMoviesInfo } from './IMovieInfo'

export interface IMoviesArray extends Array<IMoviesInfo> {}

export type FiltersType = {
    'genres.name': string[]
    'rating.imdb': string[]
    year: string[]
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
}
