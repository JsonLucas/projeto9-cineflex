import { Fragment, useState } from "react";
import Footer from "../../components/Footer";
import DataBuyer from "./DataBuyer";
import SingleSeat from "./SingleSeat";
function SectionSelectSeat({seats}){
    const [selectedSeats, setSelectedSeat] = useState([]);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const body = JSON.parse(localStorage.getItem('requestData'));
    body.movieData.movieSeats = selectedSeats;
    body.buyerData.buyerName = name;
    body.buyerData.buyerCpf = cpf;
    localStorage.setItem('requestData', JSON.stringify(body));
    return (
        <Fragment>
            <section className='section-select-seat'>
                <div className='container-select-seat'>
                    <div className='row-subtitle'><div className='subtitle'><p>Selecione o(s) assento(s)</p></div></div>
                    <section className='avaible-seats'>
                        <SingleSeat selectedSeats={selectedSeats} seatsData={seats} 
                        setSelectedSeat={setSelectedSeat} />
                    </section>
                </div>
            </section>
            <DataBuyer selectedSeats={selectedSeats} name={name} cpf={cpf} setName={setName} setCpf={setCpf} />
            <Footer movieTitle={body.movieData.movieName} moviePoster={body.movieData.moviePosterUrl} 
            movieSession={body.movieData.movieSession}/>
        </Fragment>
    );
}

export default SectionSelectSeat;