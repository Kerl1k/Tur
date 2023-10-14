import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { airplaneApi, reservationApi, tourApi } from "../services/TourService";

const rootReducer = combineReducers({
  [tourApi.reducerPath]: tourApi.reducer,
  [airplaneApi.reducerPath]: airplaneApi.reducer,
  [reservationApi.reducerPath]: reservationApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        tourApi.middleware,
        airplaneApi.middleware,
        reservationApi.middleware,
      ]),
  });
};

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
