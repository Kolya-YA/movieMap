import { useParams } from 'react-router-dom';

const Movie = () => {
    const { id } = useParams();

    return (
        <div className="min-h-full grid place-content-center">
            <h1 className="text-2xl font-semibold">
                Card of movie with id: {id}
            </h1>
        </div>
    );
}

export default Movie;