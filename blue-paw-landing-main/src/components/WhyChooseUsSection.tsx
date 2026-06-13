import { motion } from "framer-motion";
import { Shield, Award, Globe, TrendingUp, Heart, Zap } from "lucide-react";
import { CowIcon, HenIcon, FishIcon } from "./AnimalIcons";

const benefits = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "All products comply with DRAP standards and international quality certifications",
    color: "primary",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "35+ years of experience in animal health sector with trusted partnerships",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "25+ distributors ensuring timely delivery across all major regions of Pakistan",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Innovation Focus",
    description: "Continuously expanding product portfolio with latest veterinary solutions",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Dedicated support team providing technical expertise and guidance",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Quality Assured",
    description: "Rigorous quality control and pharmacovigilance for every product",
    color: "accent",
  },
];

const stats = [
  { value: "35+", label: "Years Experience", icon: TrendingUp },
  { value: "25+", label: "Distributors", icon: Globe },
  { value: "100%", label: "Quality Commitment", icon: Shield },
  { value: "6+", label: "Product Categories", icon: Award },
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

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-bl-[300px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-tr-[300px] -z-10" />
      
      {/* Floating Animal Icons */}
      <div className="absolute top-20 left-10 opacity-5 text-primary animate-float" style={{ animationDelay: "0s", animationDuration: "6s" }}>
        <CowIcon className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 text-secondary animate-float" style={{ animationDelay: "2s", animationDuration: "7s" }}>
        <HenIcon className="w-36 h-36" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-5 text-accent animate-float" style={{ animationDelay: "4s", animationDuration: "5.5s" }}>
        <FishIcon className="w-32 h-32" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-secondary/15 via-primary/10 to-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Trusted Excellence in <span className="text-gradient-primary">Animal Healthcare</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We combine decades of expertise, regulatory compliance, and customer-first approach to deliver unmatched value in animal health solutions.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-card via-primary/5 to-card rounded-2xl p-6 text-center border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group bg-gradient-to-br from-card via-primary/5 to-card rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/50 relative overflow-hidden"
            >
              {/* Animated Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500`}>
                  <benefit.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary via-secondary to-primary-dark rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8" />
              <h3 className="font-display text-2xl md:text-3xl font-bold">Certified & Trusted</h3>
            </div>
            <p className="text-lg leading-relaxed mb-6 opacity-95">
              MAFAK Pharma is committed to maintaining the highest standards of quality, safety, and regulatory compliance. 
              All our products undergo rigorous quality assurance processes and meet international pharmaceutical standards.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span>DRAP Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span>International Standards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

