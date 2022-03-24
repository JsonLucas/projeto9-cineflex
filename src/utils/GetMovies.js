import axiosConfig from './axios-config';
import { Fragment, useEffect } from "react";
export function GetMovies({setData}){
    useEffect(() => {
        const request = axiosConfig.get('/movies');
        request.then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (<Fragment></Fragment>);
}
 