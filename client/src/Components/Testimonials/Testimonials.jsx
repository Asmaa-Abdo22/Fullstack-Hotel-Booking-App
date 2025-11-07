const Testimonials = () => {
  const cardsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg  mx-4 my-4 shadow-(--shadow-card) transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt="User Image"
        />
        <div className="flex flex-col">
          <p>{card.name}</p>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
    </div>
  );

  return (
    <>
      <style>{`
        
        @keyframes marqueeScrollX {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

       
        @keyframes marqueeScrollY {
          0% { transform: translateY(0%); }
          100% { transform: translateY(0%); }
        }

        .marquee-inner {
          animation: marqueeScrollX 25s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-inner {
            flex-direction: column !important;
             align-items: center;
            animation: none;
          }
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="testimonilasss bg-(--color-bg-section) py-12 px-5 md:px-28">
        <div className="text-center px-8 md:px-28">
          <h2 className="text-[30px] md:text-[40px] mb-4 font-extrabold leading-7">
            What Our Guests Say
          </h2>
          <p className="text-(--color-text-secondary)  md:mb-5 text-sm md:text-[16px] leading-4.5">
            Discover why discerning travelers consistently choose QuickStay for
            their exclusive and luxurious <br />
            accommodations around the world.
          </p>
        </div>

        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="marquee-inner flex md:flex-row transform-gpu md:min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
