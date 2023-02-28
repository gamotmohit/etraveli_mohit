import Header from "./Header";
import ListingContainer from "./ListingContainer";
import { React, useEffect, useState } from "react";

function App() {

  const [movieList, setMovieList] = useState([]);
  const [searchListByInput, setSearch] = useState("");
  const [movieListDetailsId, setMovieListDetails] = useState("");
  const [movieListFilterType, setMovieListFilter] = useState("");
  const [fetchMovieInStages, setFetchMovieInStages] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setSearch("");
        setMovieListDetails("");
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);



  useEffect(() => {
    function fetchApi() {
      fetch("https://swapi.dev/api/films/?format=json")
        .then((response) => response.json())
        .then((data) => { setMovieList(data.results); setFetchMovieInStages(1); })
        .catch((error) => {
          console.log(error, "Unable to fetch data from server");
          setFetchMovieInStages(2);
        });
    }
    fetchApi();
  }, []);

  function onMobileViewBackButton() {
    setSearch("");
    setMovieListDetails("");
  }

  function handleSortList(type) {
    setMovieListFilter(type);
  }

  let renderMovieListFilter;

  switch (movieListFilterType) {
    case 'episode':
      renderMovieListFilter = movieList.sort((a, b) => a.episode_id.toString() > b.episode_id.toString() ? 1 : -1);
      break;
    case 'yearoldest':
      renderMovieListFilter = movieList.sort((a, b) => a.release_date.split("-")[0] > b.release_date.split("-")[0] ? 1 : -1);
      break;
    case 'yearlatest':
      renderMovieListFilter = movieList.sort((a, b) => a.release_date.split("-")[0] < b.release_date.split("-")[0] ? 1 : -1);
      break;
    case 'nameasc':
      renderMovieListFilter = movieList.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
      break;
    case 'namedes':
      renderMovieListFilter = movieList.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);
      break;
    default:
      break;
  }


  function handleChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  renderMovieListFilter = movieList.filter((movieListFilter) => {
    return searchListByInput.toLowerCase() === "" ? movieListFilter : movieListFilter.title.toLowerCase().includes(searchListByInput);
  })

  function handleOpenDetails(id) {
    setMovieListDetails(id);
  }

  const renderMovieDetailsObj = movieList.find((movieListFilter) => {
    return movieListFilter.episode_id === movieListDetailsId;
  })



  return (
    <>
      <Header handleChange={handleChange} handleSortList={handleSortList} onMobileViewBackButton={onMobileViewBackButton} movieListDetailsId={movieListDetailsId} isMobile={isMobile}></Header>
      <ListingContainer movieList={renderMovieListFilter} handleOpenDetails={handleOpenDetails} renderMovieDetailsObj={renderMovieDetailsObj} searchListByInput={searchListByInput} fetchMovieInStages={fetchMovieInStages} movieListDetailsId={movieListDetailsId} isMobile={isMobile}></ListingContainer>
    </>
  );
}

export default App;
