'use client';
import React from "react";
import { useForm, Controller } from "react-hook-form";
import JoditEditor from "jodit-react";

type FormData = {
  date: string;
  productName: string;
  monthlyAvg: string;
  dailyAvg: string;
  equityStopLoss: string;
  avgTradeLength: string;
  description: string;
};

const AddProductForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      date: "",
      productName: "",
      monthlyAvg: "",
      dailyAvg: "",
      equityStopLoss: "",
      avgTradeLength: "",
      description: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Product Data:", data);
    alert("Product submitted! Check console for data.");
    reset();
  };

  return (
    <div className="p-4 rounded-lg shadow-sm ">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Top row: Date + Product Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date <span className="text-red-500">*</span></label>
            <Controller
              name="date"
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name <span className="text-red-500">*</span></label>
            <Controller
              name="productName"
              control={control}
              rules={{ required: "Product Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter product name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName.message}</p>}
          </div>
        </div>

        {/* Middle row: Monthly Avg, Daily Avg, Equity Stop Loss, Avg Trade Length */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Avg (%)</label>
            <Controller
              name="monthlyAvg"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="e.g. 12.5"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Daily Avg (%)</label>
            <Controller
              name="dailyAvg"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="e.g. 0.5"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Equity Stop Loss (%)</label>
            <Controller
              name="equityStopLoss"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder="e.g. 10"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Avg Trade Length</label>
            <Controller
              name="avgTradeLength"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="e.g. 3 days"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <JoditEditor
                {...field}
                value={field.value}
                onBlur={(newContent) => field.onChange(newContent)}
                onChange={() => {}}
                config={{ placeholder: "Write product description...", height: 400 }}
                className="w-full mt-1 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500"
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={() => reset()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 bg-[#FFB833] text-black rounded-md hover:bg-yellow-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
