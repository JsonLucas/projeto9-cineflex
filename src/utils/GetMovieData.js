import axiosConfig from "./axios-config";
const GetMovieData = (url, setStateParam, loadParam) => {
    const request = axiosConfig.get(url);
    request.then((response) => {
        setStateParam(response.data);
        loadParam(true);
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
}

export default GetMovieData;