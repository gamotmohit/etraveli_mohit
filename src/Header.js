
function Header(props) {

    const { handleChange, handleSortList, onMobileViewBackButton, movieListDetailsId, isMobile } = props;

    //console.log("in header movieListDetailsId ::::",movieListDetailsId);
    
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                {isMobile && movieListDetailsId
                    ?
                    <div className="d-flex p-2">
                        <button type="button" className="btn btn-secondary sort-button back_Button ps-3 pe-3 " onClick={() => onMobileViewBackButton()}> Back </button>
                    </div>
                    :
                    <div className="d-flex p-2 input-group">
                        <div className="btn-group me-2">
                            <button type="button" data-testid="test_movie_sort_button"  className="btn btn-secondary dropdown-toggle sort-button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by...
                            </button>
                            <ul className="dropdown-menu sort-button-list">
                                <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => handleSortList('episode')}>Episode</li>
                                <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => handleSortList('nameasc')}>Name [A - Z]</li>
                                <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => handleSortList('namedes')}>Name [Z - A]</li>
                                <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => handleSortList('yearlatest')}>Year Latest</li>
                                <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => handleSortList('yearoldest')}>Year Oldest</li>
                            </ul>
                        </div>
                        <input type="search" data-testid="test_movie_search" className="form-control rounded-2" placeholder="Search Here" aria-label="Search Here" onChange={handleChange} />
                    </div>
                }

            </div>
        </nav>
    );
}

export default Header;