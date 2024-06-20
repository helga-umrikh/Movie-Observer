import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import { MovieWidget } from '../../components/MovieWidget/MovieWidget'
import { observer } from 'mobx-react-lite'
import { fetchKinopoiskAPI } from '../../api/MoviesAPI'
import { IMoviesInfo } from '../../interfaces/IMovieInfo'

const MoviePage = observer(() => {
    const [movieData, setMovieData] = useState<IMoviesInfo | null>(null)
    const { id } = useParams<{ id?: string }>()
    useEffect(() => {
        const getData = async () => {
            const movie = await fetchKinopoiskAPI({
                apiVersion: 'v1.4',
                apiKey: '3TH7M5V-KKD40PN-HTHH538-B2KQ7QX',
                path: '/movie',
                id,
            })
            setMovieData(movie)
        }

        getData()
    }, [id])

    return <MovieWidget data={movieData} />
})
export { MoviePage }
