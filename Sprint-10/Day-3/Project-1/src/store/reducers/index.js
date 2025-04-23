import { movies } from "../../data";
import { ADD_FAV, NEXT_FILM, PREV_FILM, REMOVE_FAV } from "../actions/index";

const initialState = {
  list: movies,
  sira: 0,
  favList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_FILM:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case NEXT_FILM:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case ADD_FAV: {
      const favMovie = state.list[state.sira];
      return {
        ...state,
        favList: [...state.favList, favMovie],
        list: state.list.filter((movie) => movie.id !== favMovie.id),
        sira:
          state.list.length - state.sira === 1
            ? state.sira === 0
              ? 0
              : state.sira - 1
            : state.sira,
      };
    }
    case REMOVE_FAV: {
      const removedFavMovie = state.favList.find(
        (movie) => movie.id === action.payload
      );
      const updatedFavList = state.favList.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favList: updatedFavList,
        list: [...state.list, removedFavMovie],
      };
    }
    default:
      return state;
  }
};

export default reducer;
