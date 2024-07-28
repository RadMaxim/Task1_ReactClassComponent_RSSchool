import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ElementType } from "../../All_Interface/BottomSection";
import { ElementsResponse, typeData } from "../../All_Interface/api/api";
const URL_API = "https://swapi.dev/api/";

export const api = createApi({
  tagTypes: ["Person"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  endpoints: (builder) => ({
    getDataAboutOurCards: builder.query<ElementsResponse, number>({
      query: (page) => `people?page=${page}`,
    }),
    getFilterDataAboutOurCards: builder.query<ElementsResponse, typeData>({
      query: ({ search, page }: typeData) => {
        let url = `people/?page=${page}`;

        if (search) {
          url += `&search=${search}`;
        }

        return url;
      },
      providesTags: (result, _, { search, page }) => {
        if (result) {
          const res = [
            ...result.results.map((elem: ElementType) => ({
              type: "Person" as const,
              id: elem.name,
            })),
            {
              type: "Person" as const,
              id: `page - ${page} - search - ${search} `,
            },
          ];
          return res;
        } else {
          return [{ type: "Person" as const, id: "PARTIAL-LIST" }];
        }
      },
    }),
  }),
});

export const {
  useGetDataAboutOurCardsQuery,
  useGetFilterDataAboutOurCardsQuery,
} = api;
