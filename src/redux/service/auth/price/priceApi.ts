import baseApi from "@/redux/api/baseApi";


const PriceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin
  getPricing: builder.query({
  query: () => ({
    url: `/pricing`, // replace :id with actual admin id
    method: "GET",
  }),
  providesTags: ['Pricing'],
}),




    // Update Admin API (PATCH)
    updatePricing: builder.mutation({
      query: ({body,id}) => ({
        url: `/pricing/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Pricing'],
    }),




    addPricing: builder.mutation({
      query: (body) => ({
        url: "/pricing",
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Pricing'],
    }),

   deletePricing: builder.mutation({
  query: (id: string) => ({
    url: `/pricing/${id}`,
    method: 'DELETE', // must be uppercase
  }),
  invalidatesTags: ['Pricing'],
}),

  }),
  overrideExisting: false,
});

export const {
    useGetPricingQuery,
    useAddPricingMutation,
    useDeletePricingMutation,
    useUpdatePricingMutation
    
  

  

 
} = PriceApi;

export default PriceApi;
