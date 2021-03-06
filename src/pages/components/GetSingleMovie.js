import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieShowtimes from '../MovieShowtimes';
import GetMovieData from '../../utils/GetMovieData';
import Loading from '../Loading';

function GetSingleMovie(){
    const { movieId } = useParams();
    const [singleMovieData, setSingleMovieData] = useState({});
    const [loaded, setLoaded] = useState(false);
    const body = {
        movieData: {
            movieName: singleMovieData.title,
            moviePosterUrl: singleMovieData.posterURL,
            movieSession: '',
            movieSeats: []
        },
        buyerData: {
            buyerName: '',
            buyerCpf: ''
        }
    };
    localStorage.setItem('requestData', JSON.stringify(body));
    useEffect(() => {
        const url = `/movies/${movieId}/showtimes`;
        GetMovieData(url, setSingleMovieData, setLoaded);
    }, []);
    return (
        <Fragment>
            {!loaded && <Loading />}
            {loaded && <MovieShowtimes movieData={singleMovieData} />}
        </Fragment>
    );
}

export default GetSingleMovie;