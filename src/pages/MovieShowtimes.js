import { Fragment } from "react";
import Footer from "../components/Footer";
import AvailableSessions from "./components/AvailableSessions";
function MovieShowtimes({movieData}){
    return (
        <Fragment>
            <section className='section-select-movie'>
                <div className='container-select-movie'>
                    <div className='row-subtitle'><div className='subtitle'><p>Selecione o Horario</p></div></div>
                    <section className='available-sessions'>
                        <AvailableSessions movieData={movieData} />
                    </section>
                </div>
            </section>
            <Footer movieTitle={movieData.title} moviePoster={movieData.posterURL} />
        </Fragment>
    );
}

export default MovieShowtimes