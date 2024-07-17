import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import accordionData from "../accordionData";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="w-10/12 mx-auto my-32">
      <div>
        {accordionData.map((item, i) => (
          <div className="my-2" key={i}>
            <div
              className="text-white text-xl flex justify-between items-center cursor-pointer bg-[#3b444b] px-6 py-6"
              onClick={() => toggle(i)}
            >
              <p> {item.question} </p>
              <span>{selected === i ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div
              className={`text-gray-400 text-base grid overflow-hidden transition-all duration-300  bg-[#3b444b]  ${
                selected === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="px-6 overflow-hidden">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
