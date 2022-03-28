import { useNavigate } from "react-router-dom";
function PreviousPage(){
    const navigate = useNavigate();
    function back(){
        navigate(-1);
    }
    return (
        <div className='previous-page' onClick={back}>
            <ion-icon name="arrow-back-circle"></ion-icon>
        </div>
    );
}
export default PreviousPage;