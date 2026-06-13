import { motion } from "framer-motion";
import { Pill, Syringe, Leaf, FlaskConical, Droplets, TrendingUp } from "lucide-react";
import { CowIcon, HenIcon, FishIcon } from "./AnimalIcons";

const products = [
  {
    icon: Pill,
    title: "Veterinary Medicines",
    description: "Comprehensive range of medicines for treatment and prevention of diseases in poultry and livestock.",
  },
  {
    icon: Syringe,
    title: "Vaccines & Biologicals",
    description: "High-quality vaccines for immunization and disease prevention programs.",
  },
  {
    icon: Leaf,
    title: "Feed Additives",
    description: "Nutritional supplements to enhance feed efficiency and animal performance.",
  },
  {
    icon: FlaskConical,
    title: "Probiotics",
    description: "Beneficial microorganisms for gut health and improved digestion.",
  },
  {
    icon: Droplets,
    title: "Vitamins & Minerals",
    description: "Essential nutrients for optimal health, growth, and productivity.",
  },
  {
    icon: TrendingUp,
    title: "Growth Promoters",
    description: "Performance enhancers for improved weight gain and feed conversion.",
  },
];

const ProductsSection = () => {

  return (
    <section id="products" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      {/* Floating Animal Icons - Animated */}
      <div className="absolute top-10 left-10 opacity-10 text-primary animate-float" style={{ animationDelay: "0s", animationDuration: "5s" }}>
        <CowIcon className="w-40 h-40 drop-shadow-2xl" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 text-secondary animate-float" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <HenIcon className="w-36 h-36 drop-shadow-2xl" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10 text-accent animate-float" style={{ animationDelay: "4s", animationDuration: "5.5s" }}>
        <FishIcon className="w-32 h-32 drop-shadow-2xl" />
      </div>
      
      {/* Colorful animated gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-primary/10 to-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Products & Solutions</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Complete Animal <span className="text-gradient-primary">Healthcare Range</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We offer a comprehensive portfolio of veterinary products imported from reputable international manufacturers, ensuring compliance with DRAP & regulatory standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-card via-primary/5 to-card rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-500 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/50 relative overflow-hidden"
            >
              {/* Animated Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
                  <product.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Commitment - More Colorful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-primary via-secondary to-primary-dark rounded-2xl p-8 md:p-10 text-primary-foreground relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Our Quality Commitment</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group/item">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/30 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent/50 transition-all duration-300">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span>Imported from reputable international manufacturers</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/30 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent/50 transition-all duration-300">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span>Compliance with DRAP & regulatory standards</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/30 flex items-center justify-center flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-accent/50 transition-all duration-300">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span>Strict quality assurance and pharmacovigilance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
