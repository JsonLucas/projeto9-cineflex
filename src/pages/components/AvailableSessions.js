import { Link } from "react-router-dom";
function AvailableSessions({movieData}) {
    return (
    <div className='container-sessions'>
        {movieData.days?.map((item, i) => (
            <div className='single-session'>
                <div className='session-weekday'>
                    <p>{item.weekday} - {item.date}</p>
                </div>
                <div className='session-showtime'>
                    {movieData.days[i].showtimes?.map((item, j) => (
                        <div className='showtimes'>
                            <Link to={`/assentos/${movieData.days[i].showtimes[j].id}`}>
                                <button className='btn-showtime'>{item.name}</button>
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