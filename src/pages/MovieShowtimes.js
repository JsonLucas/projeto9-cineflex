import { Fragment } from "react";
import Footer from "../components/Footer";
import AvailableSessions from "./components/AvailableSessions";
import PreviousPage from "./components/PreviousPage";
function MovieShowtimes({movieData}){
    return (
        <Fragment>
            <PreviousPage />
            <section className='section-select-movie'>
                <div className='container-select-movie'>
                    <div className='row-subtitle'><div className='subtitle'><p>Selecione o Horario</p></div></div>
                    <section className='available-sessions'>
                        <AvailableSessions movieData={movieData} />
                    </section>
                </div>
            </section>
            <Footer movieTitle={movieData.title} moviePoster={movieData.posterURL} positionClass='' />
        </Fragment>
    );
}

export default MovieShowtimes