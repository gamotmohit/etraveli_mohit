import TableList from "./TableList";
import MovieDetailsBlock from "./MovieDetailsContainer";


function ListingContainer(props) {
    const searchInputChar = props.searchListByInput
    const movieList = props.movieList;
    const handleOpenDetails = props.handleOpenDetails;
    const renderMovieDetailsObj = props.renderMovieDetailsObj;
    const fetchMovieInStages = props.fetchMovieInStages;
    const movieListDetailsId = props.movieListDetailsId;
    const isMobile = props.isMobile;

    const left_panel_hide = (isMobile && movieListDetailsId)?"col-sm border-end d-none":"col-sm border-end";
    const right_panel_hide = (isMobile && movieListDetailsId)?"col-sm d-xs-none d-sm-none d-md-block d-block_imp":"col-sm d-xs-none d-sm-none d-md-block"; 


    const selectedMovieId = (renderMovieDetailsObj && renderMovieDetailsObj.episode_id?renderMovieDetailsObj.episode_id:0);

    function renderLeftSidePanelHTML(){
        //console.log("fetchMovieInStages :::",fetchMovieInStages);
        if (fetchMovieInStages === 0) {
            return <div className={`${left_panel_hide}`.trim()}><div data-testid="test_movie_loading_text" className="flex_box_center">Fetching data from server....</div></div>
        } else if (fetchMovieInStages === 2) {
            return <div className={`${left_panel_hide}`.trim()}><div className="flex_box_center">Unable to fetch data from server.</div></div>
        } else if (fetchMovieInStages === 1) {
            return <div className={`${left_panel_hide}`.trim()}>
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
                        <div className={`${right_panel_hide}`.trim()}>
                            <MovieDetailsBlock renderMovieDetailsObj={renderMovieDetailsObj}></MovieDetailsBlock>
                        </div>
                        :
                        <div className={`${right_panel_hide}`.trim()}><div className="flex_box_center">No Movie Selected</div></div>
                }
            </div>
        </div>
    );
}

export default ListingContainer;