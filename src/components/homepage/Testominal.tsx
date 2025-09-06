"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"
import image1 from "@/assets/review-1.png"
import image2 from "@/assets/review-2.png"

const testimonials = [
  {
    id: 1,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image1,
  },
  {
    id: 2,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image2,
  },
  {
    id: 3,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image1,
  },
  {
    id: 4,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image2,
  },
  {
    id: 5,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image1,
  },
  {
    id: 6,
    text: "Thanks to David, our company was able to finetune our sales journey and our digital sales pitches. I really appreciate his fast response and his consistent high quality deliverables.",
    name: "Lukas Rippitsch",
    title: "Founder & CEO | HIROS.io | Improve",
    avatar: image2,
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div
      className="
        bg-slate-800/50 border border-slate-700 rounded-xl
        p-4 sm:p-6 md:p-8 
        w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]
        mx-2 sm:mx-3 md:mx-4
        flex-shrink-0
      "
    >
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="
            relative 
            w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
            rounded-full overflow-hidden flex-shrink-0
          "
        >
          <Image
            src={testimonial.avatar ?? "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        {/* Name + Title */}
        <div className="min-w-0">
          <h4
            className="
              bg-gradient-to-r from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent 
              font-semibold 
              text-xs sm:text-sm md:text-base lg:text-lg truncate
            "
          >
            {testimonial.name}
          </h4>
          <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base truncate">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className=" relative px-4 sm:px-6 py-12 sm:py-16 lg:px-12 lg:py-24 bg-transparent overflow-hidden">
      <div className="mx-auto container">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wider uppercase mb-2 sm:mb-3 md:mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-bold text-white leading-tight sm:leading-snug">
            What our clients say
          </h2>
        </div>

        {/* Marquee on large screens */}
        <div className="hidden lg:block space-y-6">
          <Marquee speed={30} gradient={false} pauseOnHover className="mb-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`row1-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee speed={30} gradient={false} direction="right" pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`row2-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Grid on small screens */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`grid-${testimonial.id}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
