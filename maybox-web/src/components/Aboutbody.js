import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Aboutbody.css";
import racially from "../assets/images/portrait-diverse-latin-people.jpg";
const Aboutbody = () => {
  return (
    <>
      <section className="sect1 mt-24">
        <div className="relative flex flex-col text-customOrangeDark items-center justify-center min-h-screen px-4">
          <div className="absolute bottom-10 left-4 md:bottom-28 md:left-8 z-10 bg-white p-4 md:p-16">
            <p className="font-semibold pl-[4px] tracking-tight text-[15px] font-neueEinstellung">Joy cannot be contained</p>
            <p className="font-normal font-playtip text-2xl md:text-5xl mb-4 md:mb-8">
              Meet your best <br /> friend in beauty.
            </p>
            <Link
              to="#"
              className="bg-customOrangeDark font-neueEinstellung hover:bg-customRed py-2 px-5 md:py-3 md:px-7 mt-4 md:mt-10 text-white"
            >
              Get It Here
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-24  font-neueEinstellung px-6 md:px-12">
        <div className="">
        <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Our Mission
            </h2>
            <p className="mb-4 text-xl">
              Making Beauty Personal
          </p>
          <p className="mb-4">
            When we started maybox, we set out to make the world of beauty
            better.{" "}
          </p>
          <p className="mb-4">
            The solution we found? Bringing you to the center. Amid the beauty
            industry’s impossible, exclusive standards, not to mention the
            overwhelming choices from ingredients to <br /> routines to
            products, we want to help you feel like your best self––based on
            your own definition.
          </p>
          <p>
            We also believe in products that work and that you love. The end
            result? That feeling you get when your monthly box arrives—of joy,
            of discovery, of a few seconds just for me––is even sweeter.
          </p>
        </div>
      </section>

      <section className="mt-24 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img
            src="https://img.freepik.com/free-photo/medium-shot-woman-using-vanity-case_23-2149764768.jpg?t=st=1727051376~exp=1727054976~hmac=6b3288418be64d96339af66ad49a1d0e5ad8151d123adff8a3971c38277e658a&w=1380"
              alt=""
              className="w-64 md:w-96 mt-12"
            />
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
            Unbox Monthly Glow
            </h2>
            <p className="text-[15px] font-neueEinstellung">
            Maybox is here to make your beauty journey simpler, more exciting, and tailored to your unique style. Every month, we curate a box filled with products designed to help you look and feel your best—on your own terms. The result? That special feeling of joy, discovery, and self-care when your Maybox arrives, reminding you to take a few moments just for yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-52 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="w-full md:w-1/3 px-4 mt-12">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Sustainability
            </h2>
            <p className="text-[15px] font-neueEinstellung">
              To make it easy for you, our community, to work eco-friendly,
              sustainably-minded choices into your daily beauty and grooming
              routine. We’re focused on three areas: Reducing waste,
              Recyclability, Reusability.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/top-view-smartphone-template-workspace_23-2148175215.jpg?t=st=1727051532~exp=1727055132~hmac=fc653fd864fa922a36b46cb09efecbe24dae43fe85db63196d3e43e34bf7b7cf&w=1380"
              alt=""
              className="w-64 md:w-96"
            />
          </div>
        </div>
      </section>

      <section className="mt-52 mb-32 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/portrait-volunteers-who-organized-donations-charity_23-2149230571.jpg?t=st=1727051960~exp=1727055560~hmac=367f411574ce8d01d007059dde729dfd8544ece9be42ebef7ca6c3b36de1fec1&w=1380"
              alt=""
              className="w-64 md:w-96 mt-12"
            />
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
            Racial Equity
            </h2>
            <p className="text-[15px] font-neueEinstellung">
At Maybox, we are dedicated to fostering a culture of inclusivity and empowerment. We believe that beauty is for everyone, and we strive to create an environment where all voices are heard and celebrated. Our commitment to equity drives us to ensure that our products and practices reflect the diversity of our community, making beauty accessible and authentic for all.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-52 mb-32 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
            Why Maybox?
            </h2>
            <p className="text-[15px] font-neueEinstellung">
            At Maybox, our focus is on you. We believe that beauty is a personal journey, and we’re here to help you discover products that work for you—no matter your skin type, beauty preferences, or routine. Whether you’re looking to explore new brands, simplify your routine, or just treat yourself to something special, Maybox is designed to bring joy, excitement, and quality products to your doorstep every month.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbody;