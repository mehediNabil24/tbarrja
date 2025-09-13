import baseApi from "@/redux/api/baseApi";


const ProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin




    // Update Admin API (PATCH)
   updatePassword: builder.mutation({
  query: (body) => ({
    url: '/auth/change-password',
    method: 'PUT',
    body, // <-- send the payload
    headers: {
      'Content-Type': 'application/json', // ensure backend parses JSON
    },
  }),
  invalidatesTags: ['Pricing'],
}),





   

  }),
  overrideExisting: false,
});

export const {
    useUpdatePasswordMutation
   
  

  

 
} = ProfileApi;

export default ProfileApi;
