import React from "react";
import Landing from "./Landing";
import { Link } from "react-router-dom";

const Khanapani = () => {
  return (
    <>
      <div className=" background-color text-white mt-1">
        <Landing />
        <div className="py-32 px-24">
          <div className="text-5xl font1">
            Explore the Beauty of Nepalese Handicrafts
          </div>
          <div className="flex justify-center pt-10 gap-6">
            <Link to="#" className="p-1 ">
              Explore Now
            </Link>
            <Link
              to="#"
              className=" rounded-3xl p-0.5  px-2 bg-orange-500 cursor-pointer hover:bg-orange-700 "
            >
              Learn More →
            </Link>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="background-color mt-1">
        <div className=" text-center py-5 text-white">
          <p className="text-3xl">
            Discover the Features of Our Traditional Handicrafts
          </p>
          <p>
            Experience the essence of Nepalese culture through our unique and
            authentic handicrafts.
          </p>
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 py-10 gap-11  ">
          <div className=" bg-white text-left w-[75%] justify-self-end rounded-xl p-3">
            <p className="text-xl">Authentic Handmade Products</p>{" "}
            <p>
              Explore a wide range of traditional handicrafts made by skilled
              artisans in Nepal.
            </p>
          </div>
          <div className="bg-white  text-left w-[75%] rounded-xl p-3">
            <p className="text-xl">Unique Cultural Designs</p>
            <p>
              {" "}
              Discover one-of-a-kind pieces that showcase the rich cultural
              heritage of Nepal.
            </p>
          </div>
          <div className="bg-white  text-left w-[75%] justify-self-end rounded-xl p-3">
            <p className="text-xl">Sustainable and Eco-Friendly</p>
            <p>
              {" "}
              Support sustainable practices and eco-friendly materials used in
              crafting these products.
            </p>
          </div>
          <div className="bg-white  text-left w-[75%] rounded-xl p-3">
            <p className="text-xl">Empowering Artisans</p>{" "}
            <p>
              Contribute to the livelihood of local artisans and help preserve
              their traditional craftsmanship.
            </p>
          </div>
        </div>
      </div>
      <div className="background-color text-white p-5 mt-1">
        <p className="text-center text-2xl px-2">
          Discover the Perfect Plan for You
        </p>
        <p className="text-center pb-5">
          Choose a plan that suits your needs and immerse yourself in the world
          of Nepalese traditional handicrafts.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white text-black justify-self-end w-[85%] p-5">
            <div className="flex flex-col space-y-6">
              <div>
                <p>FREE</p>{" "}
                <p>Access to a limited selection of traditional handicrafts</p>{" "}
                <p>Rs 0</p>
                <li>View basic product information</li>{" "}
                <li>Limited access to tutorials</li>
                <li>Ability to create a wishlist</li>{" "}
                <li>Receive monthly newsletter</li>
              </div>
              <div className="border-2 background-color1 rounded-xl self-center px-3 p-0.5">
                Continue with Free
              </div>
            </div>
          </div>
          <div className="bg-white text-black justify-self-center w-[85%] p-5">
            <div className=" flex flex-col space-y-6">
              <div>
                BASIC
                <li>Expanded collection of traditional handicrafts</li>{" "}
                <li>$ 15 / month</li>
                <li> All features of FREE plan</li>{" "}
                <li>View detailed product descriptions</li>
                <li>Access to exclusive tutorials</li>{" "}
                <li>Priority customer support</li>
                <li>10% discount on first purchase</li>
              </div>
              <div className="border-2 background-color1 rounded-xl self-center px-3 p-0.5">
                Try the Basic plan
              </div>
            </div>
          </div>
          <div className="bg-white text-black justify-self-start w-[85%] p-5">
            <div className="flex flex-col space-y-6">
              <div>
                PRO
                <li>
                  Full access to all traditional handicrafts and premium
                  features
                </li>{" "}
                <li>$ 30 / month</li>
                <li> All features of BASIC plan</li>{" "}
                <li>Unlimited access to all product listings</li>
                <li>Personalized online workshops with artisans</li>{" "}
                <li>24/7 VIP customer support</li>
                <li>15% discount on all purchases</li>
              </div>
              <div className="border-2 background-color1 rounded-xl self-center px-3 p-0.5 hover:bg-orange-800">
                Try the PRO plan
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-color text-white text-center flex flex-col p-5 mt-1">
        <p className="text-2xl">
          Experience the Beauty of Nepali Craftsmanship
        </p>
        <p>
          Immerse yourself in the exquisite world of traditional Nepalese
          handicrafts. From intricate wood carvings to vibrant textiles, each
          piece tells a story of skill and tradition passed down through
          generations.
        </p>
        <p>
          Discover unique pieces that reflect the rich cultural tapestry of
          Nepal.
        </p>{" "}
        <div className="border-2 background-color1 rounded-xl w-32 text-center self-center my-10">
          Learn More
        </div>
      </div>
      <div className="background-color2">
        <p className=" text-2xl text-white text-center">Common questions</p>
        <p className="text-white text-center">
          Here are some of the most common questions that we get.
        </p>
        <div className="p-10 px-20 space-y-4 ">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-900 p-4 text-gray-50">
              <h2 className="font-medium">
                What types of traditional handicrafts are available from Nepal?{" "}
              </h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200 ">
              Nepal offers a wide range of traditional handicrafts including
              pottery, wood carving, metal crafts, thangka paintings, and more.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-900 p-4 text-gray-50">
              <h2 className="font-medium">Are the handicrafts handmade?</h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              Yes, all the traditional handicrafts from Nepal are handmade by
              skilled artisans using traditional techniques passed down through
              generations.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-900 p-4 text-gray-50">
              <h2 className="font-medium">
                Can I customize or request a specific design for a handicraft?{" "}
              </h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              Many artisans in Nepal offer customizations and can create unique
              designs based on your preferences.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-900 p-4 text-gray-50">
              <h2 className="font-medium">
                How are the traditional handicrafts sourced and authenticated?{" "}
              </h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              We work directly with local artisans and cooperatives in Nepal to
              source authentic traditional handicrafts.Each product comes with a
              certificate of authenticity.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-900 p-4 text-gray-50">
              <h2 className="font-medium">
                Do you offer international shipping for the handicrafts?{" "}
              </h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-200">
              Yes, we offer international shipping for our traditional
              handicraft. Shipping costs and delivery times may vary depending
              on your location.
            </p>
          </details>
        </div>
      </div>
    </>
  );
};

export default Khanapani;
