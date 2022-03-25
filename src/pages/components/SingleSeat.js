import { useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import SeatSubtitle from './SeatSubtitle';
function SingleSeat({selectedSeats, seatsData, setSelectedSeat}){
    function selectSeat(e){
        const keySeat = parseInt(findDOMNode(e.target).id);
        const singleSeat = findDOMNode(e.target);
        if(singleSeat.classList.contains('available-seat')){
            singleSeat.classList.remove('available-seat');
            singleSeat.classList.add('selected-seat');
            setSelectedSeat([...selectedSeats, keySeat]);
        }else if(singleSeat.classList.contains('selected-seat')){
            singleSeat.classList.remove('selected-seat');
            singleSeat.classList.add('available-seat');
            setSelectedSeat([...selectedSeats.splice(selectedSeats.indexOf(keySeat), 1)]);
        }
        console.log(selectedSeats);
    }
    let itemClass;
    return (
        <div className='container-seats'>
            {seatsData.seats.map((item) => {
                itemClass = item.isAvailable ? 'available-seat' : 'unavailable-seat';
                return (
                <div className='single-seat'>
                    <div className={`seat ${itemClass}`} onClick={selectSeat} id={item.id}>{item.name}</div>                    
                </div>
            )})}
            <SeatSubtitle />
        </div>
    );
}

export default SingleSeat;