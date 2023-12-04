import linkedinsvg from "../../../assets/linkedin.svg";
import facebooksvg from "../../../assets/facebook.svg";
import twittersvg from "../../../assets/twitter.svg";

const Footer = () => {
  return (
    <section className="footer mx-5 md:mx-20 text-udark">
      <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="leftSide grid grid-cols-4">
          <div className="logo font-playFair font-bold tracking-wide text-xl">
            Flora
            <br />
            Care
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">About Us</span>
            <a href="/" className="font-light text-sm">
              Home
            </a>
            <a href="/" className="font-light text-sm">
              Products
            </a>
            <a href="/" className="font-light text-sm">
              Services
            </a>
            <a href="/" className="font-light text-sm">
              Contact
            </a>
            <a href="/" className="font-light text-sm">
              FAQ
            </a>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Blog</span>
            <a href="/" className="font-light text-sm">
              Support
            </a>
            <a href="/" className="font-light text-sm">
              Terms
            </a>
            <a href="/" className="font-light text-sm">
              Privacy
            </a>
            <a href="/" className="font-light text-sm">
              Cookies
            </a>
            <a href="/" className="font-light text-sm">
              Sitemap
            </a>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">Careers</span>
            <a href="/" className="font-light text-sm">
              Press
            </a>
            <a href="/" className="font-light text-sm">
              Partners
            </a>
            <a href="/" className="font-light text-sm">
              Investors
            </a>
            <a href="/" className="font-light text-sm">
              Events
            </a>
            <a href="/" className="font-light text-sm">
              Resources
            </a>
          </div>
        </div>
        <div className="hidden rightSide lg:flex flex-col space-y-3">
          <div className="font-semibold">Subscribe</div>
          <p className="text-sm font-light">
            Stay updated with our latest features and releases
          </p>
          <form action="post">
            <div className="newsletterContainer flex w-100 justify-between">
              <input
                type="email"
                name="newsEmail"
                id="newsEmail"
                className="py-2 px-2 text-sm text-udark w-full mx-5 border bg-ubg border-udark"
              />
              <button
                type="submit"
                className="w-fit py-2 px-4 border border-udark"
                placeholder="Your email"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-sm font-light">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
      <hr className="border border-umedium my-2" />
      <div className="flex justify-between text-xs md:text-sm">
        <div className="leftSide flex mt-2 mb-5">
          <div>Flora Care. All rights reserved.</div>
          <div className="flex space-x-3 mx-5">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of service</a>
            <a href="/">Cookies Settings</a>
          </div>
        </div>
        <div className="rightSide flex space-x-1 my-auto">
          <img src={linkedinsvg} alt="" />
          <img src={facebooksvg} alt="" />
          <img src={twittersvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
