import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-(--color-bg-section) shadow-md text-(--color-text-secondary) pt-8 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            <h2 className="text-5xl mb-3 font-extrabold">Quickstay</h2>

            <p className="text-sm">
             Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Instagram />
              <Facebook />
              <Twitter />
              <Linkedin />
            </div>
          </div>

          <div>
            <p className="text-lg text-(--color-primary-light)">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Press</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Partners</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-(--color-primary-light)">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">Safety Information</Link></li>
              <li><Link to="#">Cancellation Options</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Accessibility</Link></li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="text-lg text-(--color-primary-light)">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="rounded-l border border-(--color-border) h-9 px-3 outline-none placeholder:text-(--color-text-secondary)/50"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-blue-500 text-white h-9 w-9 aspect-square rounded-r">
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-(--color-border) mt-8" />

        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            Made By{" "}
            <Link
              to="https://github.com/Asmaa-Abdo22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 mx-1"
            >
              Asmaa abdo
            </Link>
            © 2025 QuickStay. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
