import { useSelector } from "react-redux";
import Loading from "./Loading";
import {baseImgUrl} from '../utils/constants';

const Hero = () => {
  const state = useSelector((store) => store.movieReducer);

  // finds rondom number for popularMovies
  const i = Math.floor(Math.random() * state.popularMovies.length);

  // gets random movie
  const movie = state.popularMovies[i];


  return (
    <div className="row p-4">
      {state.isLoading && <Loading />}
      {!state.isLoading && (
        <>
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center mb-3 gap-3">
            <h1>{movie.title}</h1>
            <p className="lead">{movie.overview}</p>
            <p className="text-warning fw-bold text-center text-md-start">IMDB: {movie.vote_average}</p>
            <div className="d-flex gap-3">
                <button className="btn btn-danger">Watch Movie</button>
                <button className="btn btn-info">Details</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-content-center justify-content-center">
            <img className="img-fluid rounded shadow" src={baseImgUrl.concat(movie.backdrop_path)}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
