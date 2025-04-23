import { Redirect, Route, Switch } from "react-router-dom";

import Movie from "./components/Movie";
import MovieList from "./components/MovieList";

import MovieHeader from "./components/MovieHeader";

import { useSelector } from "react-redux";
import AddMovieForm from "./components/AddMovieForm";
import FavoriteMovieList from "./components/FavoriteMovieList";

const App = () => {
  const displayFavorites = useSelector(
    (state) => state.favoriteReducer.displayFavorites
  );

  return (
    <div>
      <nav className="bg-zinc-800 px-6 py-3">
        <h1 className="text-xl text-white">Redux Film Projesi</h1>
      </nav>

      <div className="max-w-4xl mx-auto px-3 pb-4">
        <MovieHeader />
        <div className="flex flex-col sm:flex-row gap-4">
          {displayFavorites && <FavoriteMovieList />}

          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
