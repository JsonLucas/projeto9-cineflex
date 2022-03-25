import { Link } from "react-router-dom";

function FinalizeRequest(){
    const requestData = JSON.parse(localStorage.getItem('requestData'));
    return (
        <section className='section-finalize-request'>
            <div className='container-finalize-request'>
                <div className='row-subtitle'>
                    <div className='finalize-subtitle'><p>Pedido feito com Sucesso!</p></div>
                </div>
                <div className='row-information'>
                    <div className='subtitle-ticket'>Filme e sessão</div>
                    <div className='session-information'>
                        <p>{requestData.movieData.movieName}</p>
                        <p>{requestData.movieData.movieSession}</p>
                    </div>
                </div>
                <div className='row-information'>
                    <div className='subtitle-ticket'>Ingresso(s)</div>
                    <div className='session-information'>
                        {requestData.movieData.movieSeats?.map((item) => {
                            return <p>Assento {item}</p>
                        })}
                    </div>
                </div>
                <div className='row-information'>
                    <div className='subtitle-ticket'>Comprador</div>
                    <div className='session-information'>
                        <p>Nome: {requestData.buyerData.buyerName}</p>
                        <p>CPF: {requestData.buyerData.buyerCpf}</p>
                    </div>
                </div>
                <div className='back-home'>
                    <Link to='/'>
                        <button className='btn-finalize'>Voltar para home.</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FinalizeRequest;