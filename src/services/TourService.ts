import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITours } from "../TypeScripts/ITours";
import { IAirplane } from "../TypeScripts/IAirplane";
import { IReservation } from "../TypeScripts/IReservation";
import { ILoggin } from "../TypeScripts/ILoggin";
import { ILoginManager } from "../TypeScripts/ILoginManager";

export const tourApi = createApi({
  reducerPath: "tourAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Tour"],
  endpoints: (build) => ({
    fetchAlltour: build.query<ITours[], string>({
      query: () => ({
        url: "tour",
      }),
      providesTags: ["Tour"],
    }),
    fetchAlltourSerch: build.query<ITours[], any>({
      query: (search = "") => ({
        url: "tour",
        params: {
          hotel_like: search.search,
          country_like: search.country,
          city_like: search.city,
        },
      }),
      providesTags: ["Tour"],
    }),
    addTour: build.mutation<ITours, ITours>({
      query: (tour) => ({
        url: "tour",
        method: "POST",
        body: tour,
      }),
      invalidatesTags: ["Tour"],
    }),
    deleteTour: build.mutation<ITours, ITours>({
      query: (tour) => ({
        url: `tour/${tour.id}`,
        method: "DELETE",
        body: tour,
      }),
      invalidatesTags: ["Tour"],
    }),
    changeTour: build.mutation<ITours, ITours>({
      query: (tour) => ({
        url: `tour/${tour.id}`,
        method: "PUT",
        body: tour,
      }),
      invalidatesTags: ["Tour"],
    }),
  }),
});

export const airplaneApi = createApi({
  reducerPath: "airplaneApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Airplane"],
  endpoints: (build) => ({
    fetchAllAirplane: build.query<IAirplane[], string>({
      query: () => ({
        url: "airplane",
      }),
      providesTags: ["Airplane"],
    }),
    addAirplane: build.mutation<IAirplane, IAirplane>({
      query: (airplane) => ({
        url: "airplane",
        method: "POST",
        body: airplane,
      }),
      invalidatesTags: ["Airplane"],
    }),
    deleteAirplane: build.mutation<IAirplane, IAirplane>({
      query: (airplane) => ({
        url: `airplane/${airplane.id}`,
        method: "DELETE",
        body: airplane,
      }),
      invalidatesTags: ["Airplane"],
    }),
  }),
});

export const reservationApi = createApi({
  reducerPath: "reservationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Reservation"],
  endpoints: (build) => ({
    fetchAllReservation: build.query<IReservation[], number>({
      query: () => ({
        url: "reservation",
      }),
      providesTags: ["Reservation"],
    }),
    fetchAllReservationParams: build.query<IReservation[], any>({
      query: (params) => ({
        url: "reservation",
        params,
      }),
      providesTags: ["Reservation"],
    }),
    addReservation: build.mutation<IReservation, IReservation>({
      query: (reservation) => ({
        url: "reservation",
        method: "POST",
        body: reservation,
      }),
      invalidatesTags: ["Reservation"],
    }),
    changeReservation: build.mutation<IReservation, IReservation>({
      query: (reservation) => ({
        url: `reservation/${reservation.id}`,
        method: "PUT",
        body: reservation,
      }),
      invalidatesTags: ["Reservation"],
    }),
  }),
});

export const isLogginApi = createApi({
  reducerPath: "isLoggin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["isLoggin"],
  endpoints: (build) => ({
    fetchIsLoggin: build.query<ILoggin, any>({
      query: () => ({
        url: "isLoggin",
      }),
      providesTags: ["isLoggin"],
    }),
    changeIsLoggin: build.mutation<ILoggin, ILoggin>({
      query: (isLoggin) => ({
        url: "isLoggin",
        method: "PUT",
        body: isLoggin,
      }),
      invalidatesTags: ["isLoggin"],
    }),
  }),
});

export const loginManagerApi = createApi({
  reducerPath: "LoginManager",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["LoginManager"],
  endpoints: (build) => ({
    fetchLoginManager: build.query<ILoginManager[], any>({
      query: (login) => ({
        url: `loginManager`,
        params: {
          name: login.name,
          password: login.password,
        },
      }),
      providesTags: ["LoginManager"],
    }),
  }),
});

export const filterApi = createApi({
  reducerPath: "filter",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["filter"],
  endpoints: (build) => ({
    fetchFilter: build.query<any, any>({
      query: () => ({
        url: `filter`,
      }),
      providesTags: ["filter"],
    }),
    addFilter: build.mutation<any, any>({
      query: (filter) => ({
        url: "filter",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["filter"],
    }),
  }),
});
