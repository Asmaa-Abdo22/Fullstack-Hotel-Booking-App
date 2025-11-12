import {
  Mountain,
  Waves,
  UtensilsCrossed,
  Leaf,
  Camera,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import WellnessRetreats from "../../assets/roomImg1.png";
const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      icon: Mountain,
      title: "Mountain Escapes",
      description:
        "Discover breathtaking mountain retreats with stunning views and fresh alpine air.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      features: ["Scenic Views", "Hiking Trails", "Spa Facilities"],
    },
    {
      icon: Waves,
      title: "Beach Paradise",
      description:
        "Relax at pristine beachfront resorts with crystal-clear waters and white sand beaches.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
      features: ["Private Beaches", "Water Sports", "Sunset Views"],
    },
    {
      icon: UtensilsCrossed,
      title: "Culinary Journeys",
      description:
        "Indulge in world-class dining experiences with award-winning chefs and local cuisine.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      features: ["Fine Dining", "Wine Tasting", "Cooking Classes"],
    },
    {
      icon: Leaf,
      title: "Wellness Retreats",
      description:
        "Rejuvenate your mind and body with luxurious spa treatments and wellness programs.",
      image: WellnessRetreats,
      features: ["Spa Treatments", "Yoga Sessions", "Meditation"],
    },
    {
      icon: Camera,
      title: "Cultural Immersion",
      description:
        "Experience authentic local culture, traditions, and heritage at unique destinations.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070",
      features: ["Local Tours", "Cultural Events", "Historic Sites"],
    },
    {
      icon: Star,
      title: "Luxury Villas",
      description:
        "Stay in exclusive private villas with personalized service and ultimate privacy.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070",
      features: ["Private Pools", "Butler Service", "Exclusive Access"],
    },
  ];

  const amenities = [
    {
      title: "Premium Accommodations",
      description:
        "Carefully selected properties that meet our high standards for luxury and comfort.",
    },
    {
      title: "24/7 Concierge Service",
      description:
        "Round-the-clock assistance to ensure your stay is seamless and memorable.",
    },
    {
      title: "Exclusive Experiences",
      description:
        "Access to unique activities and experiences not available to regular travelers.",
    },
    {
      title: "Flexible Booking",
      description:
        "Easy cancellation and modification options to suit your travel plans.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-bg-experience bg-no-repeat pt-32 pb-20 md:pt-40 md:pb-28 md:px-28 min-h-[60vh] bg-cover bg-center flex flex-col justify-center text-white items-center text-center px-8"
      >
        <p className="bg-[#49B9FF]/50 w-fit px-3.5 py-1 rounded-full text-gray-200 mb-5">
          Unforgettable Experiences
        </p>
        <h1 className="text-3xl md:leading-14 font-extrabold md:text-[57px] mb-5">
          Discover Extraordinary Stays
        </h1>
        <p className="tracking-tighter max-w-2xl text-justify md:text-center text-gray-300 md:text-[18px] text-[14px]">
          From mountain peaks to ocean shores, experience the world's most
          luxurious accommodations tailored to your every desire.
        </p>
      </div>

      {/* Experience Types Section */}
      <div className="bg-(--color-bg-main) py-16 px-8 md:px-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
              Curated Experiences
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-[16px] max-w-2xl mx-auto">
              Explore our handpicked collection of exceptional stays, each
              offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <div
                  key={index}
                  className="bg-(--color-bg-card) rounded-xl overflow-hidden shadow-(--shadow-card) hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-(--color-primary)/90 p-3 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-(--color-text-main)">
                      {experience.title}
                    </h3>
                    <p className="text-(--color-text-secondary) text-sm mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-(--color-primary)/10 text-(--color-primary) px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-(--color-bg-section) py-16 px-8 md:px-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
              Why Choose QuickStay
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-[16px] max-w-2xl mx-auto">
              We go beyond booking to create exceptional travel experiences that
              exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-(--color-bg-card) p-6 rounded-xl shadow-(--shadow-card) hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-(--color-text-main)">
                  {amenity.title}
                </h3>
                <p className="text-(--color-text-secondary) text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Preview */}
      <div className="bg-(--color-bg-main) py-16 px-8 md:px-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
              Popular Destinations
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-[16px]">
              Explore our most sought-after locations around the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Santorini, Greece",
                image:
                  "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070",
              },
              {
                name: "Bali, Indonesia",
                image:
                  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070",
              },
              {
                name: "Maldives",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => navigate("/rooms")}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <MapPin size={18} />
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                  </div>
                  <button className="text-white flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-(--color-bg-section) py-16 px-8 md:px-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[30px] md:text-[40px] mb-5 font-extrabold">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-(--color-text-secondary) mb-8 text-sm md:text-[16px]">
            Browse our curated collection of luxury accommodations and start
            planning your perfect getaway.
          </p>
          <button
            onClick={() => {
              navigate("/rooms");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-md py-3 px-8 cursor-pointer bg-(--color-primary) hover:bg-(--color-primary-dark) text-white transition font-medium text-lg"
          >
            Explore All Destinations
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Experience;
