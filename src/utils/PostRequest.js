import axiosConfig from "./axios-config";
const PostRequest = (body) => {
    const request = axiosConfig.post('/seats/book-many', body);
    request.then((response) => {
        console.log(response.data);
    }).catch((error) => {
        alert('algum erro ocorreu, tente novamente mais tarde');
        console.log(error);
    });
}

export default PostRequest;