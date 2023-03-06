
function TableList(props) {
    const movieAr = props.movieListAr;
    const seletedMovieId = props.selectedMovie;
    
    return (
        <table data-testid="test_movie_list_loaded" className="table table-hover text-start displaymovie">
            <tbody>
                {movieAr &&
                    movieAr.map((aa, index) => {
                        return <tr key={index+1} className={`pointer table_font_size ${seletedMovieId ===aa.episode_id ? "active" : ""}`} onClick={() => props.handleOpenDetails(aa.episode_id)}>
                            <td style={{ width: "100px" }}>EPISODE: {aa.episode_id}</td>
                            <td className="fw-semibold">{aa.title}</td>
                            <td className="text-end">{aa.release_date}</td>
                        </tr>;
                    })}
            </tbody>
        </table>        
    );
}

export default TableList;