import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useAuthCheck } from './hooks'
import { MainLayout } from './layouts'
import { About, Home, Login, Movie, SearchMovies, SignUp, UserMovieList, UserProfile } from './Pages'

const UserProtectedRoute = () => {
    const checkAuth = useAuthCheck();
    if (checkAuth({ noNav: true })) return <Outlet />
    return <Navigate to="/login" />
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<SearchMovies />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/*" element={<div className='text-white'>404</div>} />
                    <Route element={<UserProtectedRoute />} >
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/waiting-list" element={<UserMovieList type="waiting" />} />
                        <Route path="/history-list" element={<UserMovieList type="history" />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
