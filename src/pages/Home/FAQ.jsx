import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How does the delivery process work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 2,
      question: "Is payment secure?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 3,
      question: "Can I track my shipment?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      id: 4,
      question: "Do you offer refunds?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
  ];

  // First FAQ open by default
  const [activeId, setActiveId] = useState(1);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="py-16 bg-[#f8f8f8]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-500 mt-2">
          Everything you need to know about our services.
        </p>
      </div>

      <div className="space-y-4 ">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="hover:bg-[#DADADA] bg-[#FFFFFF] rounded-xl p-5 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeId === faq.id ? "rotate-180" : ""
                }`}
              />
            </div>

            {activeId === faq.id && (
              <p className="mt-4 text-gray-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="text-center mt-10">
        <button
          className="bg-[#CAEB66] text-black px-6 py-3 rounded-full 
  hover:bg-[#b2d2d6] transition font-medium"
        >
          See More FAQ’s →
        </button>
      </div>
    </div>
  );
};

export default FAQ;
