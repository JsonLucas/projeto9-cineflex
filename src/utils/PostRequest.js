import axiosConfig from "./axios-config";
const PostRequest = (body) => {
    console.log(body);
    const request = axiosConfig.post('/seats/book-many', body);
    request.then((response) => {
        console.log(response);
        alert('deu bom');
    }).catch((error) => {
        alert('deu ruim');
        console.log(error);
    });
}

export default PostRequest;