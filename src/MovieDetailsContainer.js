
function MovieDetailsBlock(props) {

    const {title,opening_crawl,director} = props.renderMovieDetailsObj;

    return (
        <div className="row">
            <div className="col text-start pt-4 ps-4">
                <h3 className="font-movie-title">{title}</h3>
                <p className="font-13">{opening_crawl}</p>
                <p className="font-13">Directed By: {director}</p>
            </div>
        </div>
    );
}

export default MovieDetailsBlock;