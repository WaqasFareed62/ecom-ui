import React, { useRef } from "react";

const HorizontalScrollWithDots = ({ cards }) => {
  const scrollRef = useRef(null);

  const scrollToCard = (index) => {
    const card = scrollRef.current.children[index];
    card.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="relative">
      <div
        className="flex overflow-x-auto"
        style={{ scrollSnapType: "x mandatory" }}
        ref={scrollRef}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 justify-between mr-4 bg-gray-200 p-2"
          >
            {card}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className="w-4 h-4 mx-1 rounded-full bg-gray-500 hover:bg-gray-700 focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollWithDots;
