import { makeAutoObservable } from 'mobx'
import { IMoviesState, IMoviesData } from '../interfaces/IMoviesState'

class Store {
    state: IMoviesState = {
        moviesData: {} as IMoviesData,
        favorites: {} as IMoviesData,
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
}

const store = new Store()

export { store }
