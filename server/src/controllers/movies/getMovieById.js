import Movie from '../../models/movie'; 

const getMovieById = async (req, res, next) => {
    const { movieId } = req.params;

    try {
        let movie = await Movie.findById(movieId);

        if (movie) {
            movie.reqCounter += 1;
            // await movie.save();
        } else {
            const externalMovie = await fetchMovieFromTmdb(movieId);
            movie = new Movie(externalMovie);
        }

        await movie.save();
        res.status(200).json(movie);
    
    } catch (error) {
        next(error);
    }
}

export default getMovieById;