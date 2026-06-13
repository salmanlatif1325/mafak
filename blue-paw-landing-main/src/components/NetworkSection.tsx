import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CowIcon, HenIcon, FishIcon } from "./AnimalIcons";
import pakistanMapImage from "@/assets/Picture.jpg";

const distributorLocations = [
  "Abbotabad", "Burewala", "Chakwal", "Faisalabad",
  "Gilgit Baltistan", "Gujranwala", "Hyderabad", "Islamabad/Rawalpindi",
  "Jhang", "Kamaliya", "Karachi", "Lahore",
  "Layyah", "Mardan", "Multan", "Okara",
  "Peshawar", "Quetta", "Rahim Yar Khan", "Sahiwal",
  "Samundri", "Sargodha", "Sheikhupura", "Sukkur", "Talagang"
];

// Coordinates for cities on the map (x, y in SVG viewBox coordinates 0-300 width, 0-600 height)
// Adjusted for accurate Pakistan map shape (taller, more vertical)
const cityCoordinates: { [key: string]: { x: number; y: number } } = {
  "Peshawar": { x: 140, y: 80 },
  "Abbotabad": { x: 155, y: 95 },
  "Islamabad/Rawalpindi": { x: 160, y: 110 },
  "Mardan": { x: 135, y: 100 },
  "Gilgit Baltistan": { x: 200, y: 50 },
  "Lahore": { x: 180, y: 200 },
  "Gujranwala": { x: 175, y: 190 },
  "Sargodha": { x: 170, y: 220 },
  "Sheikhupura": { x: 178, y: 195 },
  "Faisalabad": { x: 190, y: 210 },
  "Sahiwal": { x: 185, y: 240 },
  "Okara": { x: 190, y: 245 },
  "Chakwal": { x: 165, y: 160 },
  "Talagang": { x: 170, y: 175 },
  "Jhang": { x: 195, y: 230 },
  "Samundri": { x: 192, y: 225 },
  "Multan": { x: 210, y: 280 },
  "Layyah": { x: 215, y: 270 },
  "Rahim Yar Khan": { x: 230, y: 300 },
  "Burewala": { x: 200, y: 250 },
  "Kamaliya": { x: 180, y: 185 },
  "Karachi": { x: 120, y: 520 },
  "Hyderabad": { x: 140, y: 480 },
  "Sukkur": { x: 180, y: 380 },
  "Quetta": { x: 50, y: 320 }
};

const NetworkSection = () => {
  return (
    <section id="network" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Floating Animal Icons */}
      <div className="absolute top-20 left-20 opacity-5 text-primary">
        <CowIcon className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-5 text-secondary">
        <HenIcon className="w-28 h-28" />
      </div>
      
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Distribution Network</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Nationwide <span className="text-gradient-primary">Presence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Extensive distribution network across Pakistan with coverage of all major poultry & livestock regions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pakistan Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-6 md:p-8 card-shadow-lg border border-border/50 relative overflow-hidden">
              {/* Pakistan Map Image */}
              <div className="relative w-full">
                <img 
                  src={pakistanMapImage} 
                  alt="Pakistan Map" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Our Distributor Locations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {distributorLocations.map((location, index) => (
                <div
                  key={location}
                  className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium truncate">{location}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 relative overflow-hidden">
              {/* Decorative animal icons */}
              <div className="absolute top-2 right-2 opacity-10">
                <div className="flex gap-2">
                  <div className="text-primary">
                    <CowIcon className="w-12 h-12" />
                  </div>
                  <div className="text-secondary">
                    <HenIcon className="w-12 h-12" />
                  </div>
                  <div className="text-accent">
                    <FishIcon className="w-12 h-12" />
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground relative z-10">
                <span className="font-bold text-foreground">25+ Distributors</span> covering all major poultry and livestock regions across Pakistan, ensuring timely delivery and reliable service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
