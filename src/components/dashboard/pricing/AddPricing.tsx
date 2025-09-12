'use client';
import { useAddPricingMutation } from "@/redux/service/auth/price/priceApi";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";


type FormData = {
  equityRange: string;
  productType: string;
  subscription: string;
  basePrice: string;
  additionalLicenses: string;
};

const AddPricingForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      equityRange: "",
      productType: "",
      subscription: "",
      basePrice: "",
      additionalLicenses: "",
    },
  });

  const [addPricing, { isLoading }] = useAddPricingMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await addPricing(data).unwrap(); // send data to backend
      toast.success("Pricing added successfully!");
      reset(); // reset form
    } catch (err) {
      console.error(err);
      toast.error("Failed to add pricing.");
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Pricing</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Equity / Account Range <span className="text-red-500">*</span></label>
            <Controller
              name="equityRange"
              control={control}
              rules={{ required: "Equity / Account Range is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="$5,000 - 50,000"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.equityRange && <p className="text-red-500 text-xs mt-1">{errors.equityRange.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Type <span className="text-red-500">*</span></label>
            <Controller
              name="productType"
              control={control}
              rules={{ required: "Product Type is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="FOREX EA"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.productType && <p className="text-red-500 text-xs mt-1">{errors.productType.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subscription <span className="text-red-500">*</span></label>
            <Controller
              name="subscription"
              control={control}
              rules={{ required: "Subscription is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="3 Months / Lifetime"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.subscription && <p className="text-red-500 text-xs mt-1">{errors.subscription.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Base Price <span className="text-red-500">*</span></label>
            <Controller
              name="basePrice"
              control={control}
              rules={{ required: "Base Price is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="$1,000 (2 licenses)"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.basePrice && <p className="text-red-500 text-xs mt-1">{errors.basePrice.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Licenses / Accounts <span className="text-red-500">*</span></label>
            <Controller
              name="additionalLicenses"
              control={control}
              rules={{ required: "Additional Licenses / Accounts is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="$400 (3-4 licenses)"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
            />
            {errors.additionalLicenses && <p className="text-red-500 text-xs mt-1">{errors.additionalLicenses.message}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={() => reset()}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading} // disable while submitting
            className={`px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Submitting..." : "Add Pricing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPricingForm;
