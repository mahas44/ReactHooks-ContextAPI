import React, { createContext, useReducer } from "react";
import { IState, IAction } from "../common/interfaces";

const initialState: IState = {
  movies: [],
  series: [],
  currentMovie: {},
  currentSeries: {},
  onlineCount: 0,
  connIds: [],
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, movies: action.payload };
    case "FETCH_SERIES":
      return { ...state, series: action.payload };
    case "SET_CURRENT_MOVIE":
      return { ...state, currentMovie: action.payload };
    case "SET_CURRENT_SERIES":
      return { ...state, currentSeries: action.payload };
    case "ONLINE":
      console.log("reducer " + action.payload);
      return { ...state, onlineCount: action.payload };
    case "USER_CONNECTED":
      console.log("store " + state.connIds.length);
      return { ...state, connIds: [...state.connIds, action.payload] };
    default:
      return state;
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
