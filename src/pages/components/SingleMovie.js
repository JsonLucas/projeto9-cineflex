import { Fragment } from "react";
import { Link } from 'react-router-dom';
function SingleMovie({dataMovie}){
    return (
        <Link to={`/sessoes/${dataMovie.id}`}>
            <div className='movie-thumb'>
                <img src={dataMovie.posterURL} />
            </div>
            <div className='movie-title'>{dataMovie.title}</div>
        </Link>
    );
}

export default SingleMovie;