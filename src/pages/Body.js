import ListMovies from './ListMovies';
function Body({data}){
    return (
        <section className='section-select-movie'>
            <div className='container-select-movie'>
                <div className='row-subtitle'><div className='subtitle'><p>Selecione o filme</p></div></div>
                <ListMovies key='list-movies' data={data} />
            </div>
        </section>
    );
}

export default Body;