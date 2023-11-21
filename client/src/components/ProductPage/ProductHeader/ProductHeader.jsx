import React from "react";
import FillButton from "../../shared/Buttons/FillButton";

const ProductHeader = () => {
  return (
    <section className="mx-5 md:mx-20 my-12">
      <div className="breadcrumbs flex space-x-1 text-sm pt-5">
        <span>Home</span>
        <svg
          className="my-auto"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3.5L11 8.5L6 13.5" stroke="black" stroke-width="1.5" />
        </svg>
        <span>Shop</span>
        <svg
          className="my-auto"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3.5L11 8.5L6 13.5" stroke="black" stroke-width="1.5" />
        </svg>
        <span>Product Name</span>
      </div>
      <div className="main my-5 grid md:grid-cols-2">
        <div className="leftSide flex space-x-2 mx-auto mb-5">
          <div className="w-20 h-96 flex-col space-y-3">
            <img
              className="h-24"
              src="https://via.placeholder.com/80x100"
              alt=""
            />
            <img
              className="self-stretch h-24"
              src="https://via.placeholder.com/80x100"
              alt=""
            />
            <img
              className="self-stretch h-24"
              src="https://via.placeholder.com/80x100"
              alt=""
            />
            <img
              className="self-stretch h-24"
              src="https://via.placeholder.com/80x100"
              alt=""
            />
          </div>
          <div className="h-fit">
            <img
              className="w-3/4 md:w-11/12"
              src="https://via.placeholder.com/520x640"
              alt=""
            />
          </div>
        </div>
        <div className="rightSide">
          <h1 className="productName text-4xl font-bold my-1">Product Name</h1>
          <h2 className="productName text-2xl font-bold my-4">$55</h2>
          <div className="stars flex space-x-2 my-4">
            <svg
            className="my-auto"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25672 1.4343C7.53172 0.781127 8.46832 0.781128 8.74332 1.4343L10.3663 5.28942C10.4823 5.56478 10.7445 5.75292 11.0454 5.77675L15.2582 6.11041C15.9719 6.16695 16.2614 7.04694 15.7175 7.50716L12.5079 10.2234C12.2786 10.4174 12.1784 10.7219 12.2485 11.0119L13.2291 15.0733C13.3952 15.7613 12.6375 16.3053 12.0264 15.9365L8.41965 13.7601C8.16202 13.6046 7.83802 13.6046 7.5804 13.7601L3.9736 15.9365C3.3625 16.3053 2.60477 15.7613 2.77091 15.0733L3.75155 11.0119C3.82159 10.7219 3.72147 10.4174 3.49221 10.2234L0.28245 7.50716C-0.261375 7.04694 0.0280544 6.16695 0.741835 6.11041L4.9547 5.77675C5.25561 5.75292 5.51774 5.56478 5.63367 5.28942L7.25672 1.4343Z"
                fill="#343829"
              />
            </svg>
            <svg
            className="my-auto"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25672 1.4343C7.53172 0.781127 8.46832 0.781128 8.74332 1.4343L10.3663 5.28942C10.4823 5.56478 10.7445 5.75292 11.0454 5.77675L15.2582 6.11041C15.9719 6.16695 16.2614 7.04694 15.7175 7.50716L12.5079 10.2234C12.2786 10.4174 12.1784 10.7219 12.2485 11.0119L13.2291 15.0733C13.3952 15.7613 12.6375 16.3053 12.0264 15.9365L8.41965 13.7601C8.16202 13.6046 7.83802 13.6046 7.5804 13.7601L3.9736 15.9365C3.3625 16.3053 2.60477 15.7613 2.77091 15.0733L3.75155 11.0119C3.82159 10.7219 3.72147 10.4174 3.49221 10.2234L0.28245 7.50716C-0.261375 7.04694 0.0280544 6.16695 0.741835 6.11041L4.9547 5.77675C5.25561 5.75292 5.51774 5.56478 5.63367 5.28942L7.25672 1.4343Z"
                fill="#343829"
              />
            </svg>
            <svg
            className="my-auto"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25672 1.4343C7.53172 0.781127 8.46832 0.781128 8.74332 1.4343L10.3663 5.28942C10.4823 5.56478 10.7445 5.75292 11.0454 5.77675L15.2582 6.11041C15.9719 6.16695 16.2614 7.04694 15.7175 7.50716L12.5079 10.2234C12.2786 10.4174 12.1784 10.7219 12.2485 11.0119L13.2291 15.0733C13.3952 15.7613 12.6375 16.3053 12.0264 15.9365L8.41965 13.7601C8.16202 13.6046 7.83802 13.6046 7.5804 13.7601L3.9736 15.9365C3.3625 16.3053 2.60477 15.7613 2.77091 15.0733L3.75155 11.0119C3.82159 10.7219 3.72147 10.4174 3.49221 10.2234L0.28245 7.50716C-0.261375 7.04694 0.0280544 6.16695 0.741835 6.11041L4.9547 5.77675C5.25561 5.75292 5.51774 5.56478 5.63367 5.28942L7.25672 1.4343Z"
                fill="#343829"
              />
            </svg>            
            <svg
            className="my-auto"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9144 6.556L15.9782 6.756C16.0307 6.90695 15.9865 7.07472 15.8665 7.18L11.9892 10.5L13.138 15.476C13.1769 15.635 13.1172 15.802 12.9864 15.9L12.8109 16.02C12.7427 16.0736 12.6582 16.1018 12.5716 16.1C12.4985 16.1015 12.4266 16.0821 12.3642 16.044L8.00016 13.38L3.66011 16.044C3.59771 16.0821 3.52573 16.1015 3.45267 16.1C3.36607 16.1018 3.28151 16.0736 3.21334 16.02L3.01388 15.9C2.88308 15.802 2.8234 15.635 2.8623 15.476L4.01114 10.5L0.14179 7.188C0.0156063 7.08334 -0.0321581 6.91092 0.0221197 6.756L0.109878 6.556C0.15654 6.39794 0.296829 6.28604 0.460912 6.276L5.55888 5.868L7.5135 1.156C7.57613 0.999515 7.72831 0.897785 7.89645 0.899999H8.10385C8.27049 0.896453 8.42105 0.999237 8.47881 1.156L10.4654 5.868L15.5634 6.276C15.7275 6.28604 15.8677 6.39794 15.9144 6.556ZM11.2871 13.748L10.3936 10.004L13.3215 7.5L9.48409 7.196L8.00016 3.628V11.74L11.2871 13.748Z"
                fill="#343829"
              />
            </svg>
            <svg
            className="my-auto"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90555 5.48353L9.90551 5.48343L8.2825 1.62831C8.17927 1.38312 7.82077 1.38312 7.71754 1.62831L6.09449 5.48343C5.9051 5.93328 5.47895 6.2368 4.99417 6.27519L0.781312 6.60885C0.501884 6.63099 0.410561 6.96056 0.60544 7.12548C0.605441 7.12548 0.605443 7.12548 0.605444 7.12548L3.8152 9.8417L3.81524 9.84173C4.18759 10.1569 4.35237 10.6539 4.23758 11.1293C4.23758 11.1293 4.23758 11.1293 4.23758 11.1293L3.25695 15.1906C3.19903 15.4305 3.46982 15.6565 3.71527 15.5084L9.90555 5.48353ZM9.90555 5.48353C10.095 5.93327 10.5211 6.2368 11.0059 6.27519L15.2187 6.60885C15.4981 6.63098 15.5894 6.96056 15.3946 7.12548L12.1849 9.8417L12.1848 9.84174C11.8125 10.1569 11.6476 10.6539 11.7624 11.1293L12.7431 15.1906C12.801 15.4305 12.5302 15.6565 12.2848 15.5084C12.2847 15.5084 12.2847 15.5084 12.2847 15.5084L8.67798 13.332L9.90555 5.48353ZM7.32206 13.332L3.7153 15.5084L8.67797 13.332C8.26148 13.0807 7.73857 13.0807 7.32207 13.332C7.32207 13.332 7.32206 13.332 7.32206 13.332Z"
                stroke="black"
              />
            </svg>
            <div>(3.5 stars) • 10 reviews</div>
          </div>
          <p className="shortDesc my-4">Introducing our IoT-based monitoring device that revolutionizes plant care. With advanced data collection and machine learning models, you can optimize plant growth and reduce water waste.</p>
          <FillButton title="Add to Cart" />
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="shipping font-semibold ">Shipping</div>
          <p className="font-light text-sm my-2">We offer free shipping on all orders</p>
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="returns font-semibold ">Returns</div>
          <p className="font-light text-sm my-2">If you're not satisfied with your purchase, we offer hassle-free returns.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
