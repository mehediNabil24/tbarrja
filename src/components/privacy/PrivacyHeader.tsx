import Image from "next/image"

export default function PrivacyHeader() {
  return (
    <section className="relative min-h-[400px] flex items-center bg-transparent justify-center overflow-hidden">
      {/* Background Image */}
     

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-purple-200  via-purple-200  to-purple-200  bg-clip-text text-transparent leading-tight">
          Privacy Policy
         
        </h1>
      </div>
    </section>
  )
}
