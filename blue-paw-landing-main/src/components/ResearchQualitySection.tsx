import { motion } from "framer-motion";
import { Microscope, FileCheck, TestTube, Award, Shield, CheckCircle2 } from "lucide-react";
import { CowIcon, HenIcon } from "./AnimalIcons";

const qualityPillars = [
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Continuous collaboration with international research institutions to bring cutting-edge solutions",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Full compliance with DRAP regulations and international pharmaceutical standards",
    color: "secondary",
  },
  {
    icon: TestTube,
    title: "Quality Testing",
    description: "Rigorous laboratory testing and quality control at every stage of the supply chain",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Pharmacovigilance",
    description: "Comprehensive monitoring and reporting system for product safety and efficacy",
    color: "primary",
  },
];

const certifications = [
  { name: "DRAP Registered", icon: Award },
  { name: "GMP Compliant", icon: CheckCircle2 },
  { name: "Quality Certified", icon: Shield },
  { name: "International Standards", icon: Award },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ResearchQualitySection = () => {
  return (
    <section id="research-quality" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      {/* Floating Animal Icons */}
      <div className="absolute top-10 right-10 opacity-10 text-primary animate-float" style={{ animationDelay: "0s", animationDuration: "5s" }}>
        <CowIcon className="w-40 h-40 drop-shadow-2xl" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 text-secondary animate-float" style={{ animationDelay: "2s", animationDuration: "6s" }}>
        <HenIcon className="w-36 h-36 drop-shadow-2xl" />
      </div>

      {/* Animated Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-primary/10 to-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Research & Quality</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Science-Backed <span className="text-gradient-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our commitment to research, quality assurance, and regulatory compliance ensures that every product meets the highest standards of safety and efficacy.
          </p>
        </motion.div>

        {/* Quality Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {qualityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="group bg-gradient-to-br from-card via-primary/5 to-card rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-500 hover:-translate-y-3 border-2 border-primary/20 hover:border-primary/50 relative overflow-hidden text-center"
            >
              {/* Animated Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
                  <pillar.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-12 card-shadow-lg border border-border/50 relative overflow-hidden"
        >
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full -z-10" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Certifications List */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Certifications & Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We maintain the highest standards of regulatory compliance and quality assurance, ensuring all products meet or exceed international pharmaceutical standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <cert.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground text-sm">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quality Assurance Process */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Quality Assurance Process
              </h3>
              <div className="space-y-4">
                {[
                  "Supplier Qualification & Auditing",
                  "Product Registration & Documentation",
                  "Batch Testing & Quality Control",
                  "Storage & Distribution Compliance",
                  "Post-Market Surveillance & Reporting",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-primary via-secondary to-primary-dark rounded-2xl p-8 md:p-10 text-primary-foreground relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Your Trust, Our Commitment
            </h3>
            <p className="text-lg leading-relaxed opacity-95">
              At MAFAK Pharma, quality isn't just a standard—it's our promise. Every product we distribute undergoes rigorous testing, 
              meets regulatory requirements, and is backed by our commitment to animal health and safety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchQualitySection;

