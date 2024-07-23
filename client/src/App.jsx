import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts'
import { About, Home, LoginSignUp, Movie, SearchMovies, SignUp } from './Pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<LoginSignUp />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<SearchMovies />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
