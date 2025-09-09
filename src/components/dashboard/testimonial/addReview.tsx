'use client';
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  clientName: string;
  designation: string;
  company: string;
  image: File | null;
  review: string;
};

const AddReviewForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      clientName: "",
      designation: "",
      company: "",
      image: null,
      review: "",
    },
  });

  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log("Review Data:", data);
    alert("Review submitted! Check console for data.");
    reset();
    setPreview(null);
  };

  return (
    <div className="p-4 rounded-lg  ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">

          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client Name <span className="text-red-500">*</span>
            </label>
            <Controller
              name="clientName"
              control={control}
              rules={{ required: "Client Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName.message}</p>}
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation <span className="text-red-500">*</span>
            </label>
            <Controller
              name="designation"
              control={control}
              rules={{ required: "Designation is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="CEO / Manager"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation.message}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company <span className="text-red-500">*</span>
            </label>
            <Controller
              name="company"
              control={control}
              rules={{ required: "Company is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="ABC Corporation"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
          </div>

          {/* Image Upload with Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image <span className="text-red-500">*</span>
            </label>
            <Controller
              name="image"
              control={control}
              rules={{ required: "Image is required" }}
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      onChange(file); // Pass file back to RHF
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setPreview(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      } else {
                        setPreview(null);
                      }
                    }}
                  />
                  {preview && (
                    <div className="mt-3">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-32 w-32 object-cover rounded-md border"
                      />
                    </div>
                  )}
                </>
              )}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Review <span className="text-red-500">*</span>
            </label>
            <Controller
              name="review"
              control={control}
              rules={{ required: "Review is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={4}
                  placeholder="Write the client review here..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.review && <p className="text-red-500 text-xs mt-1">{errors.review.message}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={() => {
              reset();
              setPreview(null);
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
