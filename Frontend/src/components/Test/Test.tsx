import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2017",
    city: "Berlin",
    description: "Visited the Berlin Wall, museums, and street cafes.",
  },
  {
    year: "2018",
    city: "Istanbul",
    description: "Explored Taksim, Uskudar, and took Bosphorus cruise.",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
  {
    year: "2019",
    city: "Barcelona",
    description: "Sagrada Familia, beaches, and tapas everywhere!",
  },
];

export default function Timeline() {
  return (
    <div className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Travel Timeline</h2>
      <div className="relative border-l-2 border-purple-500 pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-40 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="absolute -left-[1.05rem] top-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-md" />
            <h3 className="text-xl font-semibold text-purple-700">
              {item.year} – {item.city}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
