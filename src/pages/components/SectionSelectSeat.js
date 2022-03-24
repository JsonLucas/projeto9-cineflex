import SingleSeat from "./SingleSeat";
import SeatSubtitle from "./SeatSubtitle";
function SectionSelectSeat({seats}){
    return (
        <section className='section-select-seat'>
            <div className='container-select-seat'>
                <div className='row-subtitle'><div className='subtitle'><p>Selecione o(s) assento(s)</p></div></div>
                <section className='avaible-seats'>
                    <div className='container-seats'>
                        <SingleSeat seatsData={seats}/>
                        <SeatSubtitle />
                    </div>
                </section>
            </div>
        </section>
    );
}

export default SectionSelectSeat;