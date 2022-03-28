import { findDOMNode } from 'react-dom';
import SeatSubtitle from './SeatSubtitle';
function SingleSeat({selectedSeats, seatsData, setSelectedSeat, setIdSeat, idSeats}){
    function selectSeat(e){
        const singleSeat = findDOMNode(e.target);
        const keySeat = parseInt(singleSeat.id);
        const idSeat = parseInt(singleSeat.accessKey);
        if(singleSeat.classList.contains('available-seat')){
            singleSeat.classList.remove('available-seat');
            singleSeat.classList.add('selected-seat');
            setSelectedSeat([...selectedSeats, keySeat]);
            setIdSeat([...idSeats, idSeat]);
        }else if(singleSeat.classList.contains('selected-seat')){
            singleSeat.classList.remove('selected-seat');
            singleSeat.classList.add('available-seat');
            auxSelectedSeats = [...selectedSeats];
            auxIds = [...idSeats];
            for(let i = 0; i < auxSelectedSeats.length; i++){
                if(auxSelectedSeats[i] === keySeat){
                    auxSelectedSeats.splice(i, 1);
                    auxIds.splice(i, 1);
                }
            }
            setSelectedSeat(auxSelectedSeats);
            setIdSeat(auxIds);
        }
    }
    let itemClass, auxSelectedSeats = [], auxIds = [];
    return (
        <div className='container-seats'>
            {seatsData.seats.map((item) => {
                itemClass = item.isAvailable ? 'available-seat' : 'unavailable-seat';
                return (
                <div className='single-seat'>
                    <div className={`seat ${itemClass}`} onClick={selectSeat} 
                    id={item.name} accessKey={item.id}>{item.name}</div>                    
                </div>
            )})}
            <SeatSubtitle />
        </div>
    );
}

export default SingleSeat;