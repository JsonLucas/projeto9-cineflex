import { Link } from "react-router-dom";
import PostRequest from "../../utils/PostRequest";
import MaskInputCpf from "./MaskInputCpf";
function DataBuyer({selectedSeats, name, cpf, setName, setCpf}){
    const onlyNumbers = ({target: { value }}) => {
        setCpf(value.replace(/[^0-9]/g, ''));
    }
    function changeNome(e){
        setName(e.target.value);
    }
    function finalizeRequest(){
        PostRequest(body);
    }
    const body = {
        ids: selectedSeats,
        name: name,
        cpf: cpf
    };
    return(
        <section>
            <div className='container-buyer-data'>
                <div className='buyer-data'>
                    <div className='buyer-name'>
                        <div className='subtitle-input'>Nome do comprador: </div>
                        <div className='input'>
                            <input type='text' name='name' onChange={changeNome} placeholder='Digite seu nome...'/>
                        </div>
                    </div>
                    <MaskInputCpf value={cpf} onChange={onlyNumbers} />
                    <div className='finalize-request'>
                        <Link to='/request-successful'>
                            <button className='btn-finalize' onClick={finalizeRequest}>Reservar assento(s)</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DataBuyer;