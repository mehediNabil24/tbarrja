import baseApi from "@/redux/api/baseApi";


const ProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Admin
  getProduct: builder.query({
  query: () => ({
    url: `/products`, // replace :id with actual admin id
    method: "GET",
  }),
  providesTags: ['Product'],
}),




    // Update Admin API (PATCH)
    updateProduct: builder.mutation({
      query: ({body,id}) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Product'],
    }),




    addProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DeLETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
  overrideExisting: false,
});

export const {
    useAddProductMutation,
    useGetProductQuery,
    useDeleteProductMutation,
    useUpdateProductMutation

  

 
} = ProductApi;

export default ProductApi;
