import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // All images from Home folder organized by category
  const portfolioItems = [
    // Patches Category
    {
      id: 1,
      category: 'patches',
      title: 'Custom Embroidered Patches Collection',
      image: '/Home/before8.jpg',
      type: 'single'
    },
    {
      id: 2,
      category: 'patches',
      title: 'Custom Hat Patches & Emblems',
      image: '/Home/before14.jpg',
      type: 'single'
    },
    {
      id: 3,
      category: 'patches',
      title: 'Professional Patch Design',
      image: '/portfolio-snapshot/patches/p3.jpg',
      type: 'single'
    },
    {
      id: 4,
      category: 'patches',
      title: 'Custom patches',
      image: '/portfolio-snapshot/patches/p4.jpg',
      type: 'single'
    },

    // Vectors Category
    {
      id: 5,
      category: 'vectors',
      title: 'Vector Art Transformation',
      image: '/Home/before9.jpg',
      type: 'single'
    },
    {
      id: 6,
      category: 'vectors',
      title: 'Flag Vector Design',
      image: '/Home/before10.jpg',
      type: 'single'
    },
    {
      id: 7,
      category: 'vectors',
      title: 'Custom Vector Design',
      image: '/Home/vector.jpg',
      type: 'single'
    },
    {
      id: 8,
      category: 'vectors',
      title: 'Custom Military & Sports Vector',
      image: '/Home/before7.jpg',
      type: 'single'
    },

    // Digitizing Category
    {
      id: 10,
      category: 'digitizing',
      title: 'Professional Embroidery Digitizing',
      image: '/Home/before11.jpg',
      type: 'single'
    },
    {
      id: 11,
      category: 'digitizing',
      title: 'Custom Logo Digitizing Collection',
      image: '/Home/Map.jpg',
      type: 'single'
    },
    {
      id: 12,
      category: 'digitizing',
      title: 'Professional Digitizing Services',
      image: '/Home/before17.jpg',
      type: 'single'
    },
    {
      id: 13,
      category: 'digitizing',
      title: 'Custom Cap Embroidery',
      image: '/Home/cap.jpg',
      type: 'single'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work', count: portfolioItems.length },
    { id: 'patches', label: 'Patches', count: portfolioItems.filter(item => item.category === 'patches').length },
    { id: 'vectors', label: 'Vectors', count: portfolioItems.filter(item => item.category === 'vectors').length },
    { id: 'digitizing', label: 'Digitizing', count: portfolioItems.filter(item => item.category === 'digitizing').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Design Portfolio
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Embroidery Digitizing, Vector Art Work & Embroidery Patches - 
              Showcasing our expertise through real client transformations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Portfolio Grid - Changed to 2 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 text-center leading-tight">
                  {item.title}
                </h3>
                
                <div className="relative overflow-hidden rounded-xl cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.log('Image failed to load:', item.image);
                      e.target.style.display = 'none';
                    }}
                    onClick={() => openLightbox(item)}
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    item.category === 'patches' 
                      ? 'bg-orange-100 text-orange-800' 
                      : item.category === 'vectors'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            
          </motion.div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link to="/portfolio">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                View Full Portfolio
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Simple and Effective Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>

            {/* Image container */}
            <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  width: 'auto',
                  height: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold text-center mb-2">{selectedImage.title}</h3>
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    selectedImage.category === 'patches' 
                      ? 'bg-orange-500 text-white' 
                      : selectedImage.category === 'vectors'
                      ? 'bg-blue-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}>
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Click outside to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioShowcase;