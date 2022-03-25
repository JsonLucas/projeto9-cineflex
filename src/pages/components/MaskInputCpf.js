import InputMask from "react-input-mask";
function MaskInputCpf({value, onChange}){
    return (
        <div className='buyer-cpf'>
            <div className='subtitle-input'>CPF do comprador: </div>
            <div className='input'>
                <InputMask 
                    mask='999.999.999-99' 
                    value={value} 
                    onChange={onChange}
                    placeholder='Digite seu CPF...'
                />
            </div>
        </div>
    );
}

export default MaskInputCpf