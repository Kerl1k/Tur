import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITours } from "../TypeScripts/ITours";
import { IAirplane } from "../TypeScripts/IAirplane";
import { IReservation } from "../TypeScripts/IReservation";

export const tourApi = createApi({
  reducerPath: "tourAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Tour"],
  endpoints: (build) => ({
    fetchAlltour: build.query<ITours[], string>({
      query: () => ({
        url: "tour",
      }),
      providesTags: (result) => ["Tour"],
    }),
    fetchAlltourSerch: build.query<ITours[], string>({
      query: (search = "") => ({
        url: "tour",
        params: {
          hotel_like: search,
        },
      }),
      providesTags: (result) => ["Tour"],
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
      providesTags: (result) => ["Airplane"],
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
    fetchAllReservation: build.query<IReservation[], string>({
      query: () => ({
        url: "reservation",
      }),
      providesTags: (result) => ["Reservation"],
    }),
    addReservation: build.mutation<IReservation, IReservation>({
      query: (reservation) => ({
        url: "reservation",
        method: "POST",
        body: reservation,
      }),
      invalidatesTags: ["Reservation"],
    }),
  }),
});
