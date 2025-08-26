import React from 'react'
import { motion } from 'framer-motion'

const CompanyPage = () => {
  const companyValues = [
    {
      title: "Experience",
      description: "With our experience in the field, you can rely on us. We understand that every project is unique. We listen and adapt to suit your specific needs.",
      icon: "🎯"
    },
    {
      title: "Quality Work",
      description: "We build strong working relationships through our quality of work and client satisfactory results.",
      icon: "✨"
    },
    {
      title: "Fast Turnaround",
      description: "Pushing boundaries to elevate your business and deliver you the solution with quick turnaround time.",
      icon: "⚡"
    },
    {
      title: "Ideas",
      description: "Ideas are what inspire, generate momentum and create curiosity. We just happen to be in the business of making them happen for you.",
      icon: "💡"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-[#F97316]">Vector Vision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional vector art services for logos, embroidery, and custom patches
          </motion.p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-[#F97316]">Us</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vector Vision is a provider of custom embroidery digitizing services for badges, uniforms, and apparel. Our business is custom embroidery digitizing, logo designing, graphics & vectorization. We recognize the unique aspects of every design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our experienced digitizers manually convert your design into the digitized embroidery file format of your choice. Because we do not scan or "auto-digitize," we are able to adhere to the highest level of quality and capture the unique features of your design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We welcome small, one time orders but have the capability to handle large quantities. We provide digitizing to individuals doing single run embroidery projects and small monogram and screen printing shops to large national uniform service companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-semibold text-[#F97316]">
                "All of us at Vector Vision would like to thank our customers - for your trust and support."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F97316]">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The mission at Vector Vision is to provide premium quality services at the most affordable pricing for clients from across the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#F97316]">Vision</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As specialised designers, every new project drives us to challenge the boundaries of designing. Innovation and creative thinking lies at the heart of what we do: taking a new concept right from the initial stages of thinking, through to scratching, design implementation, quality inspection, support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                By continually investing in our people, processes and clients we provide high-quality, superior solutions to our customers, allowing them to shape the future of their industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What <span className="text-[#F97316]">We Do</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                If you are new to Embroidery digitizing, let us describe you about what we do. We will collect logo, pattern, photo or any other creative artwork from you and will convert it into a digital file in certain format/language that the embroidery machine can execute and stitch it out.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                This process is carried out by our thoroughly knowledgeable professionals with the help of certain embroidery digitizing software. It requires skilled digitizer's manual input and creative treatments as per the clients requirement which can not be achieved by any auto-digitizing software. In fact, many of our clients sent us auto-digitized file and asked us to re-digitize it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How are we Unique Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How are we <span className="text-[#F97316]">Unique Special Different Unusual Distinctive</span>?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Surpassing Quality of the services we provide, makes us different from others. We have highly skilled personnel in a special team of Quality Control.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We forward our work through a strict quality check under controlled environments before forwarding it to our clients, so that they avail only the best Work within short time frame.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are fully equipped with ultra modern technologies, so we ensure the quality by passing it through multilayer procedure whether it is running the prepared files in different machines or stitching the prepared design on relevant fabric by our machine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From <span className="text-[#F97316]">Concept to Final Result</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With in-house department we can take your project from initial concept and proposal right through to final deliverable. 
              Our aftercare support ensures your process runs as smoothly and efficiently as possible, safeguarding your investment and giving you peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work <span className="text-[#F97316]">Together</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with our expert team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#F97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#EA580C] transition-colors text-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage
