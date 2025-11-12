import { Award, Globe, Heart, Users, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Users, number: "50K+", label: "Happy Guests" },
    { icon: Globe, number: "500+", label: "Destinations" },
    { icon: Award, number: "4.8", label: "Average Rating" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "We prioritize your safety and security with verified properties and 24/7 support.",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description:
        "Curated selection of premium accommodations for the most discerning travelers.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our mission. We go above and beyond to exceed expectations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Discover extraordinary stays in over 500 destinations worldwide.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-bg-about bg-no-repeat pt-32 pb-20 md:pt-40 md:pb-28 md:px-28 min-h-[60vh] bg-cover bg-center flex flex-col justify-center text-white items-center text-center px-8"
      >
        <p className="bg-[#49B9FF]/50 w-fit px-3.5 py-1 rounded-full text-gray-200 mb-5">
          About QuickStay
        </p>
        <h1 className="text-3xl md:leading-14 font-extrabold md:text-[57px] mb-5">
          Your Journey, Our Passion
        </h1>
        <p className="tracking-tighter max-w-2xl text-justify md:text-center text-gray-300 md:text-[18px] text-[14px]">
          We're dedicated to transforming your travel dreams into reality,
          offering unparalleled luxury and comfort at the world's most exclusive
          destinations.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-(--color-bg-main) py-16 px-8 md:px-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
              Our Mission
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-[16px] leading-relaxed">
              At QuickStay, we believe that every journey should be extraordinary.
              Our mission is to connect travelers with exceptional accommodations
              that create lasting memories. We curate a collection of the world's
              finest hotels, resorts, and unique stays, ensuring that every
              booking is a gateway to an unforgettable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-(--color-bg-card) p-8 rounded-xl shadow-(--shadow-card)">
              <h3 className="text-2xl font-bold mb-4 text-(--color-text-main)">
                Our Vision
              </h3>
              <p className="text-(--color-text-secondary) leading-relaxed">
                To become the world's most trusted platform for luxury travel,
                where every stay exceeds expectations and every journey becomes a
                cherished memory.
              </p>
            </div>
            <div className="bg-(--color-bg-card) p-8 rounded-xl shadow-(--shadow-card)">
              <h3 className="text-2xl font-bold mb-4 text-(--color-text-main)">
                Our Promise
              </h3>
              <p className="text-(--color-text-secondary) leading-relaxed">
                We promise to deliver exceptional service, verified properties,
                and personalized experiences that make your travel dreams come
                true.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-(--color-bg-section) py-16 px-8 md:px-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[30px] md:text-[40px] mb-12 text-center font-extrabold">
            QuickStay by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-(--color-bg-card) p-6 rounded-xl shadow-(--shadow-card) text-center"
                >
                  <Icon
                    className="mx-auto mb-4 text-(--color-primary)"
                    size={32}
                  />
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-(--color-text-main)">
                    {stat.number}
                  </h3>
                  <p className="text-(--color-text-secondary) text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-(--color-bg-main) py-16 px-8 md:px-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
              Our Core Values
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-[16px] max-w-2xl mx-auto">
              These principles guide everything we do and shape the experiences
              we create for our guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-(--color-bg-card) p-6 rounded-xl shadow-(--shadow-card) hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-(--color-primary)/10 p-3 rounded-lg">
                      <Icon
                        className="text-(--color-primary)"
                        size={28}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-(--color-text-main)">
                        {value.title}
                      </h3>
                      <p className="text-(--color-text-secondary) text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-(--color-bg-section) py-16 px-8 md:px-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-(--color-text-secondary) mb-8 text-sm md:text-[16px]">
            Join thousands of satisfied travelers and discover your perfect stay
            today.
          </p>
          <button
            onClick={() => {
              navigate("/rooms");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-block rounded-md py-3 px-8 cursor-pointer bg-(--color-primary) hover:bg-(--color-primary-dark) text-white transition font-medium text-lg"
          >
            Explore Destinations
          </button>
        </div>
      </div>
    </>
  );
};

export default About;