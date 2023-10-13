import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { airplaneApi, tourApi } from "../services/TourService";

const rootReducer = combineReducers({
  [tourApi.reducerPath]: tourApi.reducer,
  [airplaneApi.reducerPath]: airplaneApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        tourApi.middleware,
        airplaneApi.middleware,
      ]),
  });
};

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
