import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import SEO from "@/components/common/SEO";

const categories = ["All", "INTERIO", "EDUFURN", "MEDIFURN", "MODULAR", "SHOPFIT"];

const projects = [
  { id: 1, title: "Home Interior", category: "INTERIO", image: "/interio/liv.webp" },
  { id: 2, title: "Educational Institution", category: "EDUFURN", image: "/edufurn/fullschoolinterior.webp" },
  { id: 3, title: "Healthcare Facility", category: "MEDIFURN", image: "/fullhospital.webp" },
  { id: 4, title: "Modern Office", category: "MODULAR", image: "/modular/off.webp" },
  { id: 5, title: "Residential Interior", category: "INTERIO", image: "/interio/living.webp" },
  { id: 6, title: "Modern Office Interior", category: "MODULAR", image: "/ws.webp" },
  { id: 7, title: "Consultation Office", category: "MEDIFURN", image: "/medifurn/consult.webp" },
  { id: 8, title: "Shopping Centre", category: "SHOPFIT", image: "/shopfit/5.webp" },
];

export default function NewGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Gallery - Royal Furniture | Our Projects & Portfolio"
        description="Explore Royal Furniture's portfolio of completed projects. View our work in home interiors, educational furniture, healthcare solutions, office workstations, and retail spaces."
        keywords="furniture gallery, royal furniture projects, interior design portfolio, furniture showcase, completed projects"
      />
      <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/auditorium.webp"
            alt="Our Portfolio"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
                Our Work
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                Project
                <span className="block font-normal mt-2">Portfolio</span>
              </h1>
              <p className="text-xl text-white/90 font-light leading-relaxed">
                Explore our collection of completed projects across various sectors
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-light tracking-wide transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-foreground hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs tracking-widest uppercase mb-1 opacity-80 font-light">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-light">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-sm tracking-widest uppercase mb-2 opacity-70 font-light">
                {selectedImage.category}
              </p>
              <h3 className="text-2xl font-light">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#e8f0f7] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              Start Your Project
            </h2>
            <p className="text-lg text-gray-700 font-light mb-12 max-w-2xl mx-auto">
              Let's create something exceptional together
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg font-light transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
}
