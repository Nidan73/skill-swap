import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "#9EF0C7",
    className: "left-6 top-10 rotate-[-10deg]",
    delay: 0,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "#F7A0A7",
    className: "right-6 top-44 rotate-[12deg]",
    delay: 0.6,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "#FEE145",
    className: "left-16 bottom-6 rotate-[8deg]",
    delay: 1.1,
  },
];

const FloatingCards = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(115deg,transparent_0%,transparent_48%,white_50%,transparent_52%,transparent_100%)] bg-[length:120px_120px]" />

      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute ${card.className}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [-10, -55, -10], opacity: 1 }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.delay,
          }}
        >
          <div
            className="w-[180px] sm:w-[220px] lg:w-[240px] rounded-[24px] shadow-2xl"
            style={{ backgroundColor: card.bg }}
          >
            <div className="p-4">
              <img
                src={card.img}
                alt="student"
                className="w-full h-[120px] sm:h-[140px] lg:h-[150px] object-cover rounded-[18px]"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCards;
