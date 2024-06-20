interface Rating {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await?: number
}

interface Votes {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await?: number
}

interface Backdrop {
    url: string
    previewUrl: string
}

interface Poster {
    url: string
    previewUrl: string
}

export interface Genre {
    name: string
}

interface Country {
    name: string
}

interface Name {
    name: string
    language?: string
    type?: string
}

interface Logo {
    url: string
}

export interface Actor {
    id: number
    photo: string
    name: string
    enName: string
    description: string
    profession: string
    enProfession: string
}

export interface IMoviesInfo {
    status: string | null
    rating: Rating
    votes: Votes
    backdrop: Backdrop
    movieLength: number
    id: number
    type: string
    name: string
    persons: Actor
    description: string
    year: number
    poster: Poster
    genres: Genre[]
    countries: Country[]
    typeNumber: number
    alternativeName: string
    enName: string | null
    names: Name[]
    ratingMpaa: string
    shortDescription: string
    ticketsOnSale: boolean
    ageRating: number
    logo: Logo
    top10: number | null
    top250: number
    isSeries: boolean
    seriesLength: number | null
    totalSeriesLength: number | null
}