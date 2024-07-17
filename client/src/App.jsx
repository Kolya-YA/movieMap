import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts'
import { About, Home, SearchMovies } from './Pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="search" element={<SearchMovies />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
