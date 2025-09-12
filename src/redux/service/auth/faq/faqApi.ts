import baseApi from "@/redux/api/baseApi";


const FaqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin
  getFaq: builder.query({
  query: () => ({
    url: `/faqs`, // replace :id with actual admin id
    method: "GET",
  }),
  providesTags: ['Faq'],
}),




    // Update Admin API (PATCH)
    updateFaq: builder.mutation({
      query: ({body,id}) => ({
        url: `/faqs/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Faq'],
    }),




    addFaq: builder.mutation({
      query: (body) => ({
        url: "/faqs",
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Faq'],
    }),

   deleteFaq: builder.mutation({
  query: (id: string) => ({
    url: `/faqs/${id}`,
    method: 'DELETE', // must be uppercase
  }),
  invalidatesTags: ['Faq'],
}),

  }),
  overrideExisting: false,
});

export const {
   useAddFaqMutation,
   useGetFaqQuery,
   useUpdateFaqMutation,
   useDeleteFaqMutation
  

  

 
} = FaqApi;

export default FaqApi;
