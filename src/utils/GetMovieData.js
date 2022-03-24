import axiosConfig from "./axios-config";
const GetMovieData = (url, setStateParam, loadParam) => {
    const request = axiosConfig.get(url);
    request.then((response) => {
        loadParam(true);
        setStateParam(response.data);
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
}

export default GetMovieData;