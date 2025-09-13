import bgImage from "@/assets/service.png"

const expertAdvisors = [
  {
    name: "BITTOOMUCH EA",
    description:
      "BTCUSD-focused trading system designed to capture directional momentum while avoiding overexposure and lowconviction setups. With adaptive sizing and real-time volatility awareness, it balances aggressive opportunity-seeking with intelligent trade timing. Built for traders who want consistent edge in fast-moving crypto markets without the noise of over-trading or scalping risk.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
  {
    name: "KIWIX EA",
    description:
      "Built for precision trading across exotic and exotic currency pairs, utilizing dynamically to shifting market structure and momentum strength. It features structured entry validation, adaptive lot sizing, and zone-aware logic to filter out noise and optimize trade timing. A smart solution for traders who value control, clarity, and consistency in dynamic market environments.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
  {
    name: "PERFECTCOMBO EA",
    description:
      "High-performance, multi-pair trading system that adapts dynamically to market behavior. It delivers precision entries with professional-grade risk control and intelligent trade automation. A professional-grade algorithm built for traders who demand disciplined execution across major FX markets.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
  {
    name: "PROFITPULSE EA",
    description:
      "Purpose-built for XAUUSD, this EA operates on higher timeframes to avoid risky scalping behavior and focus on capturing meaningful price movements. It's designed to capitalize on gold's unique volatility patterns while prioritizing capital protection, timing accuracy, and long-term trading consistency. It delivers a disciplined approach to gold trading that adapts to changing market conditions without compromising risk control.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
  {
    name: "STOCKCRUSHER EA",
    description:
      "Unlock rare access to CFD stock pair trading, one of the only MT5 systems built for high-volume tech equities. It leverages advanced pattern recognition, FOUR sequencing, and intelligent session protection to deliver disciplined, high-quality trades. We are only ones deploying institutional-level automation on U.S. stock CFDs.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
  {
    name: "THEKANGA EA",
    description:
      "Built for the unique dynamics of AUD cross-pairs. Delivers coordinated entries powered by intelligent momentum and volatility-based logic. It intelligently adjusts position size and direction based on market structure, filters trades by volatility, and exits only when a session-level profit is secured. Ideal for traders seeking calculated growth with minimal exposure to noise and high-frequency risk.",
    monthlyAvg: "14%",
    dailyAvg: "0.7%",
    equityStopLoss: "5%",
    avgTradeLength: "24 Min",
  },
]

export default function ExpertAdvisorsShowcase() {
  return (
  <div 
      className="relative bg-cover bg-no-repeat"
        style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%", // take full width & height
        backgroundPosition: "center", 
        // optional: center the image
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

    <section className="relative py-16 lg:py-24 overflow-hidden text-justify lg:text-start">
      {/* Background Image */}
     

      <div className="relative px-6 lg:px-12">
        <div className="mx-auto container">
          {/* Grid of Expert Advisors */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertAdvisors.map((ea, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 space-y-6"
              >
                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent  ">{ea.name}</h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>As of this date:</span>
                    <span className="text-white">02/25/2025</span>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Monthly Avg</div>
                    <div className="text-2xl font-bold text-white">{ea.monthlyAvg}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Daily Avg</div>
                    <div className="text-2xl font-bold text-white">{ea.dailyAvg}</div>
                  </div>
                </div>

                {/* Risk Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Equity Stop Loss</div>
                    <div className="text-xl font-bold text-white">{ea.equityStopLoss}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Avg Trade Length</div>
                    <div className="text-xl font-bold text-white">{ea.avgTradeLength}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">{ea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
