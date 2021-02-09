import "./App.css";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      {/* <h1>Netflix Clone</h1> */}
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.ActionMoviesfetch} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
