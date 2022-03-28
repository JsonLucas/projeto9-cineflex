import { useNavigate } from "react-router-dom";
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
        if((selectedSeats.length !== 0) || 
        (body.name !== '') || (body.cpf !== '')){
            PostRequest(body);
            navigation('/request-successful');
        }else{
            alert('você deve selecionar pelo menos um assento.');
        }
    }
    function toggleFooter(){
        document.querySelector('.footer').classList.toggle('hidden');
    }
    const body = {
        ids: selectedSeats,
        name: name,
        cpf: cpf
    };
    const navigation = useNavigate();
    return(
        <div className='container-buyer-data'>
            <div className='buyer-data'>
                <div className='buyer-name'>
                    <div className='subtitle-input'>Nome do comprador: </div>
                    <div className='input'>
                        <input type='text' name='name' onChange={changeNome} 
                        onFocus={toggleFooter} onBlur={toggleFooter} 
                        placeholder='Digite seu nome...' required />
                    </div>
                </div>
                <MaskInputCpf value={cpf} onChange={onlyNumbers} onFocus={toggleFooter} onBlur={toggleFooter} />
                <div className='finalize-request'>
                    <button className='btn-finalize' onClick={finalizeRequest}>Reservar assento(s)</button>
                </div>
            </div>
        </div>
    );
}

export default DataBuyer;