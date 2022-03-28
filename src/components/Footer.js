function Footer({movieTitle, moviePoster, movieSession, positionClass}){
    return (
        <footer className={`footer ${positionClass}`}>
            <div className='container-sample-movie'>
                <div className='sample-single-movie'>
                    <div className='sample-movie-thumb'>
                        <div className='movie-thumb'>
                            <img src={moviePoster} />
                        </div>
                    </div>
                    <div className='sample-movie-information'>
                        <div className='movie-title'>{movieTitle}</div>
                        <div className='movie-session'>{movieSession}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;