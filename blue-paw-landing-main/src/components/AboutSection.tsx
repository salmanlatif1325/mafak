import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, Sparkles } from "lucide-react";
import { CowIcon, HenIcon, FishIcon } from "./AnimalIcons";

const coreValues = [
  { icon: Shield, title: "Quality & Compliance", description: "Adhering to highest industry standards" },
  { icon: Heart, title: "Integrity & Ethics", description: "Transparent and honest business practices" },
  { icon: Users, title: "Customer Satisfaction", description: "Putting our clients first always" },
  { icon: Sparkles, title: "Innovation", description: "Continuous improvement in all we do" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-muted/50 rounded-bl-[200px] -z-10" />
      
      {/* Floating Animal Icons - Animated */}
      <div className="absolute top-20 right-10 opacity-15 text-primary animate-float" style={{ animationDelay: "0s", animationDuration: "4s" }}>
        <CowIcon className="w-32 h-32 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15 text-secondary animate-float" style={{ animationDelay: "1.5s", animationDuration: "5s" }}>
        <HenIcon className="w-28 h-28 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/2 right-20 opacity-15 text-accent animate-float" style={{ animationDelay: "3s", animationDuration: "4.5s" }}>
        <FishIcon className="w-24 h-24 drop-shadow-lg" />
      </div>
      
      {/* Colorful gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 via-primary/15 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Your Trusted Partner in <span className="text-gradient-primary">Animal Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MAFAK Pharma is a Pakistan-based Animal Health Pharmaceutical company specializing in import, nationwide distribution and marketing of veterinary medicines, vaccines, feed additives, probiotics, vitamins, and nutritional solutions for poultry and livestock.
          </p>
        </motion.div>

        {/* Animal Showcase - Professional Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto"
        >
          {/* Livestock Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group flex flex-col items-center p-8 bg-card rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
              <CowIcon className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Livestock</h3>
            <p className="text-sm text-muted-foreground text-center">Cattle & Dairy</p>
          </motion.div>

          {/* Poultry Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group flex flex-col items-center p-8 bg-card rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300">
              <HenIcon className="w-12 h-12 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Poultry</h3>
            <p className="text-sm text-muted-foreground text-center">Chickens & Birds</p>
          </motion.div>

          {/* Aquaculture Card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group flex flex-col items-center p-8 bg-card rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300">
              <FishIcon className="w-12 h-12 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Aquaculture</h3>
            <p className="text-sm text-muted-foreground text-center">Fish & Aquatic</p>
          </motion.div>
        </motion.div>

        {/* Vision & Mission - More Colorful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          <div className="group bg-gradient-to-br from-card via-primary/5 to-card rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-500 border-2 border-primary/20 hover:border-primary/50 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 relative z-10">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              To be a trusted market leader in animal healthcare by delivering innovative, safe, and effective solutions that enhance poultry and livestock productivity across Pakistan.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-card via-secondary/5 to-card rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-500 border-2 border-secondary/20 hover:border-secondary/50 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 relative z-10">Our Mission</h3>
            <ul className="text-muted-foreground space-y-3 relative z-10">
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                <span>To supply high-quality, scientifically proven animal health products</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                <span>To support farmers and veterinarians through technical expertise</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                <span>To contribute to the sustainable growth of Pakistan's poultry and livestock industry</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Our Core Values</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="group bg-gradient-to-br from-card via-primary/5 to-card rounded-xl p-6 text-center card-shadow hover:card-shadow-lg transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/50 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 shadow-lg">
                <value.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 relative z-10">{value.title}</h4>
              <p className="text-muted-foreground text-sm relative z-10">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
