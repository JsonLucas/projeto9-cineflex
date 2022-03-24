import { Fragment } from 'react';
function SingleSeat({seatsData}){
    return (
        <Fragment>
            {seatsData.seats.map((item) => (
                <div className='single-seat'>
                    {item.isAvailable && <div className='seat available-seat'>{item.name}</div>}
                    {!item.isAvailable && <div className='seat unavailable-seat'>{item.name}</div>}                    
                </div>
            ))}
        </Fragment>
    );
}

export default SingleSeat;