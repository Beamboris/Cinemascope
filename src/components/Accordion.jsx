import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusantium distinctio nulla, tempora fuga quo odit labore pariatur recusandae nostrum eos culpa accusamus deserunt vero!",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusantium distinctio nulla, tempora fuga quo odit labore pariatur recusandae nostrum eos culpa accusamus deserunt vero!",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum accusantium distinctio nulla, tempora fuga quo odit labore pariatur recusandae nostrum eos culpa accusamus deserunt vero!",
  },
];

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
        {data.map((item, i) => (
          <div>
            <div
              className="text-white text-xl flex justify-between items-center cursor-pointer mt-2 bg-[#3e0000] px-6 py-6"
              onClick={() => toggle(i)}
            >
              <p> {item.question} </p>
              <span>{selected === i ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className={`text-gray-400 bg-[#3e0000] max-h-0 overflow-hidden ${selected === i ? "max-h-[99999px] h-auto" : null}`}>
              <p className="px-6 pb-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
