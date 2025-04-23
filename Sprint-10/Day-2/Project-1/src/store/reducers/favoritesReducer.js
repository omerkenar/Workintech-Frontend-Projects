import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";
import { DELETE_MOVIE } from "../actions/movieActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (!state.favorites.find((movie) => movie.id === action.payload.id)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
