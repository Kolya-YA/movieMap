import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useMovieDetail = (id) => {
	const [detail, setDetail] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchDetail = useCallback(async () => {
		if (!id) return;

		const url = `/api/v1/details/movie/${id}`;
		setIsLoading(true);
		setError(null);

		try {
			const response = await axios.get(url);
			setDetail(response.data);
		} catch (error) {
			console.error("Failed to fetch movie details:", error);
			setError("Failed to load movie details.");
		} finally {
			setIsLoading(false);
		}
	}, [id]);

	useEffect(() => {
		fetchDetail();
	}, [fetchDetail]);

	return { detail, isLoading, error, refetch: fetchDetail };
};

export default useMovieDetail;
