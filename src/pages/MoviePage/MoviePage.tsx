import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieWidget } from '../../components/MovieWidget/MovieWidget'
import { observer } from 'mobx-react-lite'
import { fetchKinopoiskAPI } from '../../api/MoviesAPI'
import { IMoviesInfo } from '../../interfaces/IMovieInfo'

const MoviePage = observer(() => {
    const [movieData, setMovieData] = useState<IMoviesInfo | null>(null)
    const { id } = useParams<{ id?: string }>()
    useEffect(() => {
        const getMovieData = async () => {
            const movie = await fetchKinopoiskAPI({
                apiVersion: 'v1.4',
                apiKey: process.env.REACT_APP_ACCESS_KEY,
                path: '/movie',
                id,
            })
            setMovieData(movie)
        }
        getMovieData()
    }, [id])

    return <MovieWidget data={movieData} />
})
export { MoviePage }
