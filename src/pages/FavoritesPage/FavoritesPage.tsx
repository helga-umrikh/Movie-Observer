import React from 'react'
import styles from './styles.module.scss'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import MoviesList from '../../components/MoviesList/MoviesList'

const FavoritesPage = observer(() => {
    return (
        <div className={styles.favoritesPage}>
            <MoviesList data={store.state.favorites} />
        </div>
    )
})

export { FavoritesPage }
