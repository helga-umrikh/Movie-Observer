import { makeAutoObservable } from 'mobx'
import {
    IMoviesState,
    FiltersType,
    IMoviesData,
    IMoviesArray,
} from '../interfaces/IMoviesState'
import { IMoviesInfo } from '../interfaces/IMovieInfo'

class Store {
    state: IMoviesState = {
        moviesData: {
            page: 1,
        } as IMoviesData,
        favorites: {
            docs: [] as IMoviesArray,
        } as IMoviesData,
        filters: {
            'genres.name': null,
            'rating.imdb': null,
            year: null,
        },
        genresLabels: [],
    }

    constructor() {
        makeAutoObservable(this)
    }

    setMoviesData(payload: IMoviesData) {
        this.state.moviesData = payload
    }

    changePage(page: number) {
        this.state.moviesData.page = page
    }

    actionFavorites(payload: IMoviesInfo, isFavorite: boolean) {
        if (!isFavorite) {
            this.state.favorites.docs.push(payload)
            const favLength = this.state.favorites.docs.length
            this.state.favorites.total = favLength
            this.state.favorites.pages = Math.floor(favLength / 50)
        }
        if (isFavorite) {
            this.state.favorites.docs = this.state.favorites.docs.filter(
                (item) => item.id !== payload.id
            )
            const favLength = this.state.favorites.docs.length
            this.state.favorites.total = favLength
            this.state.favorites.pages = Math.floor(favLength / 50)
        }
    }

    addFilters<K extends keyof FiltersType>(
        filterType: K,
        values: FiltersType[K]
    ) {
        this.state.filters[filterType] = values
    }

    addGenresNames(payload: string[]) {
        this.state.genresLabels = payload
    }
}

const store = new Store()

export { store }
