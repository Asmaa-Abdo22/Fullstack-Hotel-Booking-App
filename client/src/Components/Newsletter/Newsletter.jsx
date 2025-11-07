import { ArrowRight } from "lucide-react";


const Newsletter = () => {
  return (
    <>
      <div className="py-20 px-12">
        <div className="flex shadow-(--shadow-card) flex-col items-center max-w-5xl  rounded-2xl px-4  py-10 mx-2 lg:mx-auto  bg-(--color-bg-section) space-y-5 md:space-y-0 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-[40px] font-bold">Stay Inspired</h1>
            <p className="text-sm md:text-base text-(--color-text-secondary) mt-2 max-w-xl">
              Join our newsletter and be the first to discover new updates,
              exclusive offers, and inspiration.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <input
              type="text"
              className="px-4 py-2.5 border border-(--color-border) rounded outline-none max-w-66 w-full placeholder:text-(--color-text-secondary) focus:placeholder:text-(--color-text-secondary)"
              placeholder="Enter your email"
            />

            <button className="flex items-center justify-center gap-2 group text-white bg-(--color-primary-dark) px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all mt-2 md:mt-0">
              Subscribe
              <ArrowRight size={15} />
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-xs text-center">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
