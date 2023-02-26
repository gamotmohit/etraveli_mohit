
function Header(props) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex p-2 input-group">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-secondary dropdown-toggle sort-button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by...
                        </button>
                        <ul className="dropdown-menu sort-button-list">
                            <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => props.handleSortList('episode')}>Episode</li>
                            <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => props.handleSortList('nameasc')}>Name [A - Z]</li>
                            <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => props.handleSortList('namedes')}>Name [Z - A]</li>
                            <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => props.handleSortList('yearlatest')}>Year Latest</li>
                            <li className="dropdown-item font-13 border-bootom-1 pt-2 pb-2 pointer" onClick={() => props.handleSortList('yearoldest')}>Year Oldest</li>
                        </ul>
                    </div>
                    <input type="search" className="form-control rounded-2" placeholder="Search Here" aria-label="Search Here" onChange={props.handleChange} />
                </div>
            </div>
        </nav>
    );
}

export default Header;