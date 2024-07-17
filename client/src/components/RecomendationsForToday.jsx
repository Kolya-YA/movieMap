import { Link } from "react-router-dom";

const RecomendationsForToday = () => {
    return (
        <>
            <hr />
            <h2>Recommendations for today from MovAI</h2>
            <ul>
                <li>1. The Shawshank Redemption (1994) - 9.2</li>
                <li>2. The Godfather (1972) - 9.1</li>
                <li>3. The Dark Knight (2008) - 9.0</li>
            </ul>
            <Link to='/recomedation' className="text-blue-500 hover:underline">Get More Recommendations from MovAI</Link>
            <hr />
        </>
    )
}

export default RecomendationsForToday;