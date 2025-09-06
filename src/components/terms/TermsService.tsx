
import bgImage from "@/assets/bg-faq.png"

export default function TermsOfService() {
  return (

     <div 
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    <section className="relative bg-transparent">
      {/* Background Image */}
     

      {/* Content */}
      <div className="relative z-10 px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto container">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">
                IMPORTANT - PLEASE CAREFULLY READ AND UNDERSTAND OUR TERMS OF USE AND CONDITIONS OF SALE (TERMS OR
                AGREEMENT) BEFORE ACCESSING OR USING, OR PLACING AN ORDER THROUGH OUR SITE. THESE TERMS CONTAIN
                DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITIES (SEE SECTIONS 15 AND 16). THESE TERMS FORM AN
                ESSENTIAL BASIS OF OUR AGREEMENT.
              </p>

              <p className="text-sm leading-relaxed">
                Your use of www.fintechstrategies.ai and/or www.thetradinghub.com including any subdomains thereof,
                affiliated websites, and mobile applications (collectively, the Site) which are owned and maintained
                by FINTECH STRATEGIES, LLC (Fintech Strategies, our, us, or we) are governed by the policies,
                terms, and conditions set forth below. Please read our terms carefully. We offer the Site, including all
                information, tools, products, and services available from the Site to you, the user, conditioned upon
                your acceptance of all terms, conditions, policies, and notices stated here. By accessing, using, or
                placing an order through the Site, you agree to the terms and conditions in their entirety. If you do
                not agree to these terms and conditions in their entirety, you are not authorized to use the Site in any
                manner or form whatsoever.
              </p>

              <p className="text-sm leading-relaxed">
                THIS AGREEMENT CONTAINS ARBITRATION AND CLASS ACTION WAIVER PROVISIONS THAT WAIVE YOUR RIGHT TO A COURT
                HEARING, RIGHT TO A JURY TRIAL, AND RIGHT TO PARTICIPATE IN A CLASS ACTION. ARBITRATION IS MANDATORY AND
                IS THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES UNLESS SPECIFIED BELOW IN SECTION 17 OR IF YOU OPT-OUT.
                PLEASE CAREFULLY REVIEW THE DISPUTE RESOLUTION PROVISIONS IN SECTION 17 BELOW WHICH DESCRIBE YOUR RIGHT
                TO OPT-OUT.
              </p>

              <p className="text-sm leading-relaxed">
                You can review the most current version of the Terms at any time on this page (Terms and Conditions |
                THE TRADING HUB / FINTECH STRATEGIES). We reserve the right to update, change, or replace any part of
                these Terms by posting updates and/or changes to our Site. It is your responsibility to check this page
                periodically for changes.
              </p>

              <p className="text-sm leading-relaxed">
                YOUR CONTINUED USE OF OR ACCESS TO THE SITE FOLLOWING THE POSTING OF ANY CHANGES CONSTITUTES BINDING
                ACCEPTANCE OF THOSE CHANGES.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">1. Site Use</h2>
                <p className="text-sm leading-relaxed">
                  All Fintech Strategies Sites, products, and services are intended for adults only. By using the Site
                  and agreeing to these Terms, you represent that you are at least the age of majority in your state or
                  province of residence. If you use the Site, you affirm that you have the legal capacity to enter into
                  a binding contract with us, and have read this Agreement and understand and agree to be bound by it.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">2. Changes to these terms</h2>
                <p className="text-sm leading-relaxed">
                  Fintech Strategies reserves the right to update, change, or replace any part of these Terms by posting
                  updates and changes to our Site. It is your responsibility to check this page periodically for
                  changes. Your continued use of or access to the Site following the posting of any changes constitutes
                  binding acceptance of those changes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">3. Privacy and Security Disclosure</h2>
                <p className="text-sm leading-relaxed">
                  THE TRADING HUB / FINTECH STRATEGIES Privacy Policy may be viewed at Privacy Policy | THE TRADING HUB
                  / FINTECH STRATEGIES. The Privacy Policy is hereby incorporated into these Terms by reference and
                  constitutes a part of this Agreement. Fintech Strategies reserves the right to modify the Privacy
                  Policy at its sole discretion.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">4. No Investment Recommendations or Professional Advice</h2>
                <p className="text-sm leading-relaxed">
                  Fintech Strategies does not provide personalized investment advice. The Site or any of Fintech
                  Strategies products or services are intended to provide tax, legal, insurance, or investment advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
