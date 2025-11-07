import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { exclusiveOffers } from "../../assets/assets";

const ExclusiveOffers = () => {

 
  return (
    <>
      <div className="px-12 py-12 md:px-28 ">
        <div className="header flex flex-col  space-y-7 md:space-y-0 md:flex-row  justify-between items-center  ">
          <div className="title">
            <h2 className="text-[30px] md:text-[40px] mb-1  font-extrabold">
              Exclusive Offers
            </h2>
            <p className="text-(--color-text-secondary) text-justify  text-sm md:text-[16px] leading-4.5">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create <br /> unforgettable memories.
            </p>
          </div>
          <button className="group rounded-md py-1 flex items-center gap-1  px-4 cursor-pointer text-(--color-primary) border text-sm font-medium">
            <span>View All Offers</span>{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>

        <div className="allcards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {exclusiveOffers.map((item, index) => {
            return (
              <Link
                key={item._id}
                className="bg-orange-300 rounded-xl py-4 px-5 overflow-hidden bg-cover bg-no-repeat w-full bg-center flex flex-col items-start justify-between space-y-3 shadow-(--shadow-card)"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className="rounded-full text-sm px-4 py-1 bg-(--color-bg-main) text-(--color-primary)">
                  {item.priceOff} % OFF
                </p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <p className="text-sm text-gray-300">{item.expiryDate}</p>
                <button className="group rounded-md py-1 flex items-center gap-1  px-1 cursor-pointer   text-sm font-medium">
                  <span>View Offers</span>{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-all"
                  />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExclusiveOffers;
