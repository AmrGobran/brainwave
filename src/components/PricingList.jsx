import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((card) => (
        <div
          key={card.id}
          className={`w-76 max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-4xl lg:w-auto even:py-14 odd:py-8 odd:my-4 ${
            card.title.toLowerCase() === "basic"
              ? "[&>h4]:text-c-2"
              : card.title.toLowerCase() === "premium"
              ? "[&>h4]:text-c-1"
              : "[&>h4]:text-c-3"
          } `}
        >
          <h4 className="h4 mb-4">{card.title}</h4>

          <p className="body-2 min-h-16 mb-3 text-n-1/50">{card.description}</p>

          <div className="flex items-end h-22 mb-6">
            {card.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {card.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={card.price ? "/pricing" : "mailto:amrgobran0100@gmail.com"}
            white={!!card.price}
          >
            {card.price ? "Get started" : "Contact us"}
          </Button>

          <ul className="">
            {card.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start py-5 not-first-of-type:border-t border-n-6 "
              >
                <img src={`${check}`} width={24} height={24} alt="check" />

                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
