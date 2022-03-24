function Footer({movieTitle, moviePoster}){
    return (
        <footer className='footer'>
            <div className='container-sample-movie'>
                <div className='sample-single-movie'>
                    <div className='sample-movie-thumb'>
                        <div className='movie-thumb'>
                            <img src={moviePoster} />
                        </div>
                    </div>
                    <div className='sample-movie-title'>
                        <div className='movie-title'>{movieTitle}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;