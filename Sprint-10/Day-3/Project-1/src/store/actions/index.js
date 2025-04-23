export const PREV_FILM = "PREV_FILM";
export const NEXT_FILM = "NEXT_FILM";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const prevFilm = () => {
  return {
    type: PREV_FILM,
  };
};

export const nextFilm = () => {
  return {
    type: NEXT_FILM,
  };
};

export const addFav = () => {
  return {
    type: ADD_FAV,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
