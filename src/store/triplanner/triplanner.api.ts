import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { City, Ticket } from '../../models/models'

export const triplannerApi = createApi({
  reducerPath: 'triplannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://44.204.232.250/' }),
  endpoints: (builder) => ({
    getCities: builder.query<Array<City>, string>({
      query: (cityName: string) => ({
        url: `cities/${cityName}`
      })
    }),

    getTickets: builder.query<Array<Ticket>, { fromId: string, toId?: string, dDate?: string, rDate?: string }>({
      query: (arg) => {
        const { fromId, toId, dDate, rDate } = arg
        return {
          url: 'tickets',
          params: { fromId, toId, dDate, rDate }
        }
      }
    })
  }),
})
export const { useGetCitiesQuery, useLazyGetTicketsQuery } = triplannerApi