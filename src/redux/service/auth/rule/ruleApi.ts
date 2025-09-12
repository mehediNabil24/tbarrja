import baseApi from "@/redux/api/baseApi";


const RuleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin
  getRule: builder.query({
  query: () => ({
    url: `/subscription-rules`, // replace :id with actual admin id
    method: "GET",
  }),
  providesTags: ['Rules'],
}),




    // Update Admin API (PATCH)
    updateRule: builder.mutation({
      query: ({body,id}) => ({
        url: `/subscription-rules/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Rules'],
    }),




    addRule: builder.mutation({
      query: (body) => ({
        url: "/subscription-rules",
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Rules'],
    }),

   deleteRule: builder.mutation({
  query: (id: string) => ({
    url: `/subscription-rules/${id}`,
    method: 'DELETE', // must be uppercase
  }),
  invalidatesTags: ['Rules'],
}),

  }),
  overrideExisting: false,
});

export const {
    useGetRuleQuery,
    useAddRuleMutation,
    useUpdateRuleMutation,
    useDeleteRuleMutation
  

  

 
} = RuleApi;

export default RuleApi;
