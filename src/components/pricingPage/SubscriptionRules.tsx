import { Check } from "lucide-react"

export default function SubscriptionRules() {
  const rules = [
    "Forex EA includes 2 MT5 licenses per subscriptions",
    "you may purchase additional licenses at the same or a lower equity only",
    "if you want to an additional licenses at the higher tier , you must upgrade your main subscription first.",
    "Upgrades are allowed at any time and are prorated",
    "Downgrades are not permitted mid - term",
    "Add-on licenses are prorated to end with your main subscription.",
    "Futura EA subscriptions include 1 licenses only, with no add-ons",
  ]

  return (
    <section
      className="relative px-6 pb-16 lg:px-12 bg-transparent lg:pb-24"
     
    >
    

      <div className="relative container">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 tracking-wide text-center lg:text-start  ">SUBSCRIPTIONS RULES AND NOTES:</h2>

        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
