import { Fragment, useState, useEffect } from 'react';
import MovieShowtimes from '../MovieShowtimes';
import axiosConfig from '../../utils/axios-config';
function GetSingleMovie({movieId}){
    const [singleMovieData, setSingleMovieData] = useState();
    useEffect(() => {
        const request = axiosConfig.get(`/movies/${movieId}/showtimes`);
        request.then((response) => {
            setSingleMovieData(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <Fragment>
            <MovieShowtimes movieData={singleMovieData} />
        </Fragment>
    );
}

export default GetSingleMovie;