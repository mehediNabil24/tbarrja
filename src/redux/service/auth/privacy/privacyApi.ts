import baseApi from "@/redux/api/baseApi";


const PrivacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin
  getPrivacy: builder.query({
  query: () => ({
    url: `/settings`, // replace :id with actual admin id
    method: "GET",
  }),
  providesTags: ['Privacy'],
}),




    // Update Admin API (PATCH)
    updatePrivacy: builder.mutation({
      query: ({body}) => ({
        url: `/settings`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Privacy'],
    }),





  }),
  overrideExisting: false,
});

export const {
    useGetPrivacyQuery,
    useUpdatePrivacyMutation
   

  

 
} = PrivacyApi;

export default PrivacyApi;
