import { findDOMNode } from "react-dom";
import { Link } from "react-router-dom";
function AvailableSessions({movieData}) {
    function setSessionDay(e){
        const body = JSON.parse(localStorage.getItem('requestData'));
        body.movieData.movieSession = findDOMNode(e.target).value;
        localStorage.setItem('requestData', JSON.stringify(body));
    }
    return (
    <div className='container-sessions'>
        {movieData.days?.map((itemDays, i) => (
            <div className='single-session'>
                <div className='session-weekday'>
                    <p>{itemDays.weekday} - {itemDays.date}</p>
                </div>
                <div className='session-showtime'>
                    {movieData.days[i].showtimes?.map((itemShowtime, j) => (
                        <div className='showtimes'>
                            <Link to={`/assentos/${movieData.days[i].showtimes[j].id}`}>
                                <button value={`${itemDays.date} ${itemShowtime.name}`} className='btn-showtime' 
                                onClick={setSessionDay}>
                                    {itemShowtime.name}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    );
}

export default AvailableSessions;