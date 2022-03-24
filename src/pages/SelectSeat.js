import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from 'react';
import Loading from "./Loading";
import GetMovieData from "../utils/GetMovieData";
import SectionSelectSeat from "./components/SectionSelectSeat";

function SelectSeat(){
    const { sessionId } = useParams(); 
    const [seats, setSeats] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const url = `/showtimes/${sessionId}/seats`;
        GetMovieData(url, setSeats, setLoaded);
    }, []);
    return (
        <Fragment>
            {!loaded && <Loading />}
            {loaded && <SectionSelectSeat seats={seats} />}
        </Fragment>
    );
}
export default SelectSeat;