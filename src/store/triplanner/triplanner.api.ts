import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { City, Country, LoginUser, RegisterUser, Ticket, User } from '../../models/models'

export const triplannerApi = createApi({
  reducerPath: 'triplannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.triplanner.uk/' }),
  endpoints: (builder) => ({
    getCities: builder.query<Array<City>, string>({
      query: (cityName: string) => ({
        url: `cities/${cityName}`
      })
    }),

    getTickets: builder.query<Array<Ticket>, { fromId: string, toId?: string, dDate?: string, rDate?: string, type?: string}>({
      query: (arg) => {
        const { fromId, toId, dDate, rDate, type } = arg
        return {
          url: 'api/tickets/search',
          params: { fromId, toId, dDate, rDate, type }
        }
      }
    }),

    getCountries: builder.query<Array<Country>, string>({
      query: (countryName: string) => ({
        url: `countries/${countryName}`
      })
    }),
  }),
})
export const { useGetCitiesQuery, useGetTicketsQuery, useGetCountriesQuery } = triplannerApi