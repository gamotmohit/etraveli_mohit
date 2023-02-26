import TableList from "./TableList";
import MovieDetailsBlock from "./MovieDetailsContainer";


function ListingContainer(props) {
    const searchInputChar = props.searchListByInput
    const movieList = props.movieList;
    const handleOpenDetails = props.handleOpenDetails;
    const renderMovieDetailsObj = props.renderMovieDetailsObj;
    const fetchMovieInStages = props.fetchMovieInStages;

    const selectedMovieId = (renderMovieDetailsObj && renderMovieDetailsObj.episode_id?renderMovieDetailsObj.episode_id:0);

    console.log("fetchMovieInStages :::",fetchMovieInStages);

    function renderLeftSidePanelHTML(){
        console.log("fetchMovieInStages :::",fetchMovieInStages)
        if (fetchMovieInStages === 0) {
            return <div className="col-6 border-end mt-4">Fetching data from server....</div>
        } else if (fetchMovieInStages === 2) {
            return <div className="col-6 border-end mt-4">Unable to fetch data from server.</div>
        } else if (fetchMovieInStages === 1) {
            console.log("VALUE :::::: ",searchInputChar && searchInputChar.length > 0 && movieList === 0)
            return <div className="col-6 border-end">
                {
                    (searchInputChar && searchInputChar.length > 0 && movieList.length === 0)
                        ?
                        <div className="mt-4 text-center">Unable to search movie name as <b>{searchInputChar}</b></div>
                        :
                        <TableList movieListAr={movieList} handleOpenDetails={handleOpenDetails} selectedMovie={selectedMovieId}></TableList>
                }
            </div>
        }
    }

    const renderLeftSidePanel = renderLeftSidePanelHTML();

    return (
        <div className="container text-center" style={{ maxWidth: "100%" }}>
            <div className="row" style={{ display: "flex", height: "calc(100vh - 70px)" }}>
                {renderLeftSidePanel}
                {
                    renderMovieDetailsObj && renderMovieDetailsObj.episode_id ?
                        <div className="col-6">
                            <MovieDetailsBlock renderMovieDetailsObj={renderMovieDetailsObj}></MovieDetailsBlock>
                        </div>
                        :
                        <div className="col-6 flex_box_center">No Movie Selected</div>
                }
            </div>
        </div>
    );
}

export default ListingContainer;