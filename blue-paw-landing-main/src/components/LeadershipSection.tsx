import { motion } from "framer-motion";
import { Award, Briefcase, Users } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Leadership</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Experienced <span className="text-gradient-primary">Management</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our leadership brings decades of expertise in the animal health sector, driving innovation and excellence.
          </p>
        </motion.div>

        {/* Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow-lg border border-border/50 relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar Placeholder */}
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Users className="w-20 h-20 text-primary-foreground opacity-80" />
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                  Managing Director & CEO
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The Managing Director & CEO of MAFAK Pharma brings over <span className="font-bold text-foreground">35 years of Marketing & Sales experience</span> in the Animal Health sector of Pakistan. This extensive expertise drives our commitment to excellence and industry leadership.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold text-foreground">35+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold text-foreground">25+</div>
                    <div className="text-muted-foreground text-sm">Distributors</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 text-center col-span-2 md:col-span-1">
                    <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold text-foreground">100%</div>
                    <div className="text-muted-foreground text-sm">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
