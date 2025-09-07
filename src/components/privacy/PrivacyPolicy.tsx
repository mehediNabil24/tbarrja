import bgImage from "@/assets/bg-faq.png"

export default function PrivacyPolicy() {
  return (

    <div 
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    <section className="relative ">
      {/* Background Image */}
     

      {/* Content */}
      <div className="relative z-10 px-6 py-16 lg:px-12 lg:py-24 text-justify">
        <div className="container">
          <div className="space-y-6 text-white">
            <p className="text-base leading-relaxed">
              At FINTECH STRATEGIES / THE TRADING HUB, we take privacy issues seriously. By ensuring that you are aware
              of and understand the FINTECH STRATEGIES / THE TRADING HUB Privacy Policy, we can provide you with better
              service. Please take a moment to read the following policy to learn how we handle your personal
              information
            </p>

            <p className="text-base leading-relaxed">
              FINTECH STRATEGIES / THE TRADING HUB collects personal information to improve the manner by which we
              operate, offer our products and services, communicate with you about those products and services, and
              provide effective, timely customer support when needed. We will never rent or sell any of the personal
              information we collect from you to third parties, and we do not share your personal information except as
              set forth in this Privacy Policy.
            </p>

            <p className="text-base leading-relaxed">
              What kind of personal information do we collect? FINTECH STRATEGIES / THE TRADING HUB collects personal
              information in a variety of ways when you interact with FINTECH STRATEGIES / THE TRADING HUB, including
              when you register or create an account with FINTECH STRATEGIES / THE TRADING HUB; when you place an order
              at FINTECH STRATEGIES / THE TRADING HUB; when you use FINTECH STRATEGIES / THE TRADING HUB products or
              services; when you visit FINTECH STRATEGIES / THE TRADING HUB pages or pages of certain FINTECH STRATEGIES
              / THE TRADING HUB partners; when you enter promotions or sweepstakes; when you subscribe to a newsletter
              or desire to be added to our mailing lists for other products or services; when you correspond or
              otherwise interact with us; and when you provide feedback in any of our online surveys.
            </p>

            <p className="text-base leading-relaxed">
              Information we collect may include: your name, e-mail address, phone number, address, product preference
              information, billing information, demographic information provided by you (such as language, gender and
              age, and, if applicable, content preferences and personalization information) and personal interest
              information. On occasion, we may ask for additional information to enable us to provide access to and use
              of certain information, materials and services. FINTECH STRATEGIES / THE TRADING HUB may combine
              information about you that we have the information we obtain from business partners or other companies.
            </p>

            <p className="text-base leading-relaxed">
              Cookies are small data files that write to your hard drive for record keeping purposes when you visit a
              website. Cookies allow FINTECH STRATEGIES / THE TRADING HUB to measure traffic activity as well as to
              improve your user experience, for example by remembering your passwords and viewing preferences. Like
              other major websites, FINTECH STRATEGIES / THE TRADING HUB uses cookies to provide you with a tailored
              experience when visiting FINTECH STRATEGIES / THE TRADING HUB and using our major products.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
