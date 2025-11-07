import homeImg from "../../assets/heroImage.png";
import ExclusiveOffers from "../../Components/ExclusiveOffers/ExclusiveOffers";
import FeaturedDestination from "../../Components/FeaturedDestination/FeaturedDestination";
import Form from "../../Components/Form/Form";
import HotelRegestration from "../../Components/HotelRegestration/HotelRegestration";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div
        className="bg-no-repeat pt-13  md:px-28 min-h-screen bg-cover bg-center flex flex-col justify-center bg-fixed text-white items-center md:items-start"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <p className="bg-[#49B9FF]/50 w-fit px-3.5 mt-10 py-1 rounded-full text-gray-200">
          The Ultimate Hotel Experience
        </p>
        <h1 className="text-3xl  md:leading-14 font-extrabold md:text-[57px]  my-5">
          Discover Your Perfect <br /> Gateway Destination
        </h1>
        <p
          className="tracking-tighter
         max-w-52 text-justify text-gray-300  md:max-w-96 md:text-[18px] text-[14px] mb-8"
        >
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
        <Form />
      </div>
      {/* <HotelRegestration /> */}
      <FeaturedDestination />

      <ExclusiveOffers />

      <Testimonials />

      <Newsletter />
    </>
  );
};

export default Home;
