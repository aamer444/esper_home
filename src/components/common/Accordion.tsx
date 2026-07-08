import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 py-3 text-left sm:py-4"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-esper-navy sm:text-base">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-esper-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
       className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-3 sm:pb-4" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId(openId === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
};

export default Accordion;
