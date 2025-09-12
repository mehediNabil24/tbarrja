import baseApi from "@/redux/api/baseApi";


const ProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin




    // Update Admin API (PATCH)
    updatePassword: builder.mutation({
      query: () => ({
        url: `/auth/change-password`,
        method: 'PUT',
        
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
