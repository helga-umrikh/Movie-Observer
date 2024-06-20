import React from 'react'
import './styles/index.scss'
import { Flex, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Header } from './components/Header/Header'

function App() {
    return (
        <div className="App">
            <Flex gap="middle" wrap="wrap" className="wrap">
                <Layout className="App__layout">
                    <Header />
                    <Content className="App__content">
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                        </Routes>
                    </Content>
                </Layout>
            </Flex>
        </div>
    )
}

export default App
