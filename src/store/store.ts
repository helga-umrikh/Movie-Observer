import { makeAutoObservable } from 'mobx'
import {
    IMoviesState,
    IMoviesData,
    IMoviesArray,
} from '../interfaces/IMoviesState'
import { IMoviesInfo } from '../interfaces/IMovieInfo'
import { IMoviesState, IMoviesData } from '../interfaces/IMoviesState'


class Store {
    state: IMoviesState = {
        moviesData: {} as IMoviesData,
        favorites: {
            docs: [] as IMoviesArray,
        } as IMoviesData,
        filters: {
            'genres.name': [],
            'rating.imdb': [],
            'releaseYears.start': [],
            'releaseYears.end': [],
        },
    }

    constructor() {
        makeAutoObservable(this)
    }

    setMoviesData(payload: IMoviesData) {
        this.state.moviesData = payload
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

}

const store = new Store()

export { store }
