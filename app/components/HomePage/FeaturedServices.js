"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "VECTORIZATION",
    description: "We take your any raster image and recreate them into clean image ready for vector art.",
    beforeImage: "/portfolio-snapshot/vectors/before13.jpg",
    afterImage: "/portfolio-snapshot/vectors/vector-1.jpg",
    points: [
      "Handmade Vector, no auto vector/tracing",
      "Redrawing",
      "All Major Formats",
      "Outstanding Quality with Fastest Turnaround Time",
      "Virtual Samples",
    ],
  },
  {
    title: "DIGITIZATION",
    description: "We customize files for Embroidery work.",
    beforeImage: "/portfolio-snapshot/digitization/before2.jpg",
    afterImage: "/portfolio-snapshot/digitization/digitize-1.jpg",
    points: [
      "Affordable Digitizing without compromising the Quality.",
      "Fastest Turnaround time by 4 to 8 Hours",
      "Provide all Major Format",
      "Expert in Wilcom, Melco and Pulse",
      "Free Minor Editing, Revision and Resizing",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FeaturedServices() {
  return (
    <section className="w-full bg-[#0B0B0B] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Special Offer Banner */}
        <motion.div 
          className="mb-12 bg-gray-800 rounded-lg p-4 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Special Offer</span>
            <span className="text-red-400 font-semibold">Get your first design for free.</span>
            <span className="text-white">→</span>
          </div>
          <button className="bg-[#F97316] text-white px-6 py-2 rounded-md font-medium hover:bg-[#EA580C] transition-colors">
            CONTACT US
          </button>
        </motion.div>

        <div className="flex flex-col gap-14 md:gap-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`grid items-center gap-8 md:gap-12 lg:gap-16 
                          lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeIn}
            >
              {/* Before/After Image Comparison */}
              <div className="w-full">
                <div className="flex items-center gap-4">
                  {/* Before Image */}
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={s.beforeImage}
                        alt={`Before ${s.title}`}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-2">Before</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-[#F97316] text-2xl font-bold">→</div>
                  
                  {/* After Image */}
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={s.afterImage}
                        alt={`After ${s.title}`}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-2">After</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full">
                <h3 className="mb-3 text-3xl font-extrabold tracking-wide text-[#F97316] md:text-4xl">
                  {s.title}
                </h3>
                
                <p className="mb-6 text-lg text-zinc-300 leading-relaxed">
                  {s.description}
                </p>

                <ul className="space-y-3 text-base leading-relaxed text-zinc-200">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#F97316]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
