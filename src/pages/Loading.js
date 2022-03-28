import styled from 'styled-components';
import loader from '../assets/loader.svg';
function Loading(){
    return(
        <Container>
            <Loader>
                <img src={loader} />
            </Loader>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Loader = styled.div`
    width: 50px;
    height: 50px;

    img{
        width: 100%;
        height: 100%;
    }
`;
export default Loading;