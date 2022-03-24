function SeatSubtitle(){
    return ( 
        <div className='seats-subtitle'>
            <div className='status-seat'>
                <div className='seat-demo selected-seat'></div>
                <div className=''>Selecionado</div>
            </div>
            <div className='status-seat'>
                <div className='seat-demo available-seat'></div>
                <div className=''>Disponível</div>
            </div>
            <div className='status-seat'>
                <div className='seat-demo unavailable-seat'></div>
                <div className=''>Indisponível</div>
            </div>
        </div>
    )
}

export default SeatSubtitle;