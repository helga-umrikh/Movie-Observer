import React from 'react'
import './styles/index.scss'
import { Box, Container, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Header } from './components/Header/Header'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'

function App() {
    return (
        <div className="App">
            {/* <Flex gap="middle" wrap="wrap" className="wrap">
                <Layout className="App__layout"> */}
            <Box sx={{ flexGrow: 1 }} className="App__layout">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Header />
                        </Grid>
                        <Grid item xs={12} className="App__content">
                            <Routes>
                                <Route path="/" element={<MainPage />} />
                                <Route
                                    path="/movie/:id"
                                    element={<MoviePage />}
                                />
                                <Route
                                    path="/favorites"
                                    element={<FavoritesPage />}
                                />
                            </Routes>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* </Layout>
            </Flex> */}
        </div>
    )
}

export default App
