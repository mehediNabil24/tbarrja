import Image from "next/image"

export default function SubscriptionPricing() {
  const pricingData = [
    {
      range: "$5,000 - 50,000",
      productType: "FOREX EA",
      subscription: "3 Months",
      basePrice: "$1,000",
      baseLicenses: "(2 LICENSES)",
      additionalPrice: "$400",
      additionalLicenses: "(3-4 LICENSES)",
      additionalPrice2: "$300",
      additionalLicenses2: "(5+ LICENSES)",
    },
    {
      range: "$50,001 - 150,000",
      productType: "FOREX EA",
      subscription: "3 Months",
      basePrice: "$1,500",
      baseLicenses: "(2 LICENSES)",
      additionalPrice: "$650",
      additionalLicenses: "(3-4 LICENSES)",
      additionalPrice2: "$550",
      additionalLicenses2: "(5+ LICENSES)",
    },
    {
      range: "$150,001 - 250,000",
      productType: "FOREX EA",
      subscription: "3 Months",
      basePrice: "$2,000",
      baseLicenses: "(2 LICENSES)",
      additionalPrice: "$900",
      additionalLicenses: "(3-4 LICENSES)",
      additionalPrice2: "$800",
      additionalLicenses2: "(5+ LICENSES)",
    },
    {
      range: "$250,001 - UNLIMITED",
      productType: "FOREX EA",
      subscription: "3 Months",
      basePrice: "$4,000",
      baseLicenses: "(2 LICENSES)",
      additionalPrice: "$1,900",
      additionalLicenses: "(3-4 LICENSES)",
      additionalPrice2: "$1,800",
      additionalLicenses2: "(5+ LICENSES)",
    },
    {
      range: "UNLIMITED",
      productType: "FOREX EA",
      subscription: "Lifetime",
      basePrice: "$25,000",
      baseLicenses: "(2 LICENSES)",
      additionalPrice: "$10,000",
      additionalLicenses: "(3-4 LICENSES)",
      additionalPrice2: "",
      additionalLicenses2: "",
    },
    {
      range: "$100,000k",
      productType: "FUTURES EA",
      subscription: "3 Months",
      basePrice: "$5,000",
      baseLicenses: "(5 ACCOUNTS)",
      additionalPrice: "$375",
      additionalLicenses: "(ACCOUNTS 6-10)",
      additionalPrice2: "$250",
      additionalLicenses2: "(ACCOUNTS 11-20)",
    },
  ]

  return (
    <section className="relative px-6 py-16 lg:px-12 lg:py-24 bg-transparent overflow-hidden">
      {/* Background Image */}
    

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Subscription Pricing - Forex &
            <br />
            Futures Expert Advisors
          </h2>
          <p className="text-gray-300 text-lg">No backroom deals. No fine print. Just fair pricing for everyone.</p>
        </div>

        {/* Pricing Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 p-6 bg-slate-800/70 border-b border-slate-700/50">
            <div className="text-white font-semibold">Equity / Account Range</div>
            <div className="text-white font-semibold">Product Type</div>
            <div className="text-white font-semibold">Subscription</div>
            <div className="text-white font-semibold">Base Price</div>
            <div className="text-white font-semibold">Additional Licenses / Accounts</div>
          </div>

          {/* Table Rows */}
          {pricingData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-6 border-b border-slate-700/30 last:border-b-0 hover:bg-slate-700/20 transition-colors"
            >
              {/* Equity Range with Gradient Background */}
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl p-4 text-center">
                  <div className="text-white font-bold text-lg">{row.range}</div>
                </div>
              </div>

              {/* Product Type */}
              <div className="flex items-center">
                <span className="text-white font-medium">{row.productType}</span>
              </div>

              {/* Subscription */}
              <div className="flex items-center">
                <span className="text-white">{row.subscription}</span>
              </div>

              {/* Base Price */}
              <div className="flex items-center">
                <div>
                  <div className="text-white font-bold text-lg">{row.basePrice}</div>
                  <div className="text-gray-400 text-sm">{row.baseLicenses}</div>
                </div>
              </div>

              {/* Additional Licenses */}
              <div className="flex items-center">
                <div className="space-y-2">
                  <div>
                    <span className="text-white font-bold">{row.additionalPrice}</span>
                    <span className="text-gray-400 text-sm ml-1">{row.additionalLicenses}</span>
                  </div>
                  {row.additionalPrice2 && (
                    <div>
                      <span className="text-white font-bold">{row.additionalPrice2}</span>
                      <span className="text-gray-400 text-sm ml-1">{row.additionalLicenses2}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
