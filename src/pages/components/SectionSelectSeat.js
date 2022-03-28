import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import DataBuyer from "./DataBuyer";
import SingleSeat from "./SingleSeat";
function SectionSelectSeat({seats}){
    const [selectedSeats, setSelectedSeat] = useState([]);
    const [idSeats, setIdSeat] = useState([]);
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const body = JSON.parse(localStorage.getItem('requestData'));
    body.movieData.movieSeats = selectedSeats;
    body.buyerData.buyerName = name;
    body.buyerData.buyerCpf = cpf;
    localStorage.setItem('requestData', JSON.stringify(body));
    if(stillAvailable(seats.seats) < seats.seats.length){
        return (
            <Fragment>
                <section className='section-select-seat'>
                    <div className='container-select-seat'>
                        <div className='row-subtitle'><div className='subtitle'><p>Selecione o(s) assento(s)</p></div></div>
                        <section className='avaible-seats'>
                            <SingleSeat selectedSeats={selectedSeats} seatsData={seats} 
                            setSelectedSeat={setSelectedSeat} setIdSeat={setIdSeat} idSeats={idSeats} />
                        </section>
                    </div>
                    <DataBuyer selectedSeats={idSeats} name={name} cpf={cpf} 
                    setName={setName} setCpf={setCpf} />
                </section>
                <Footer movieTitle={body.movieData.movieName} moviePoster={body.movieData.moviePosterUrl} 
                movieSession={body.movieData.movieSession} positionClass='position-absolute'/>
            </Fragment>
        );
    }else{
        return <SoldOut>
            <section>
                <div><strong>Esta sessão está esgotada.</strong></div>
                <div><Back onClick={() => {navigate(-1)}}>Voltar</Back></div>
            </section>
        </SoldOut>;
    }
}

const SoldOut = styled.div`
    position: absolute;
    height: 90vh;
    width: 100%;
    section{
        align-items: center;
        margin-top: 25%;
        div{
            box-sizing: border-box;
            padding: 3px;
            width:31%;
            margin: auto;
        }
    }
`;
const Back = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgb(232, 131, 58);
    color: white;
`;

const stillAvailable = (seats) => {
    let cont = 0;
    for(let i in seats){
        if(!seats[i].isAvailable){
            cont++;
        }
    }
    return cont;
}

export default SectionSelectSeat;