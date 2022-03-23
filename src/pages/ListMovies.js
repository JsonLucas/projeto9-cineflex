import SingleMovie from "./components/SingleMovie";
function ListMovies({data}){
    return (
        <section className='section-list-movies'>
            <div className='container-movies'>
                {data?.map((item) => (
                    <div className='single-movie'>
                        <SingleMovie key={item.id} dataMovie={item} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ListMovies