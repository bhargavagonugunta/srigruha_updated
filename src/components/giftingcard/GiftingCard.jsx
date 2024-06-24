import React from "react";
import gift from "../../../public/assets/gift.jpg";
import life from "../../../public/assets/life-is-sweet-logo.avif";
import { GiftBoxes, GiftCombo } from "../homepage/homedata";
import { useDispatch } from "react-redux";
import { AddCart } from "../CartSlice";
import { motion } from "framer-motion";

const GiftingCard = () => {
  const dispatch = useDispatch();
  function handleDispatch(item) {
    dispatch(AddCart(item));
  }
  return (
    <div>
      <div>
        <img src={gift} className="opacity-80 px-4 " />
      </div>
      <div className="text-center my-10">
        <img src={life} className="mx-auto py-6 px-4" />
      </div>
      <div>
        <h2 className="sm:text-4xl text-2xl text-green-600 py-4 text-center">
          Gift With Sweetness
        </h2>
        <p className="md:text-center px-8">
          The joy of gifting sweets is a feeling that is shared across cultures
          and traditions. By giving someone a box of delicious sweets is a
          thoughtful act that can make their day happier and can bring a smile
          to their face. They are a means of spreading happiness and goodwill
          among friends, family, and acquaintances. So, why not send sweet boxes
          for gifting as a token of love to your special ones from the comfort
          of your home?
        </p>
      </div>
      <h2 className="text-center sm:text-4xl text-2xl tracking-wide text-green-600 py-16">
        GIFT BOXES
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8  ">
        {GiftBoxes.map((item, index) => (
          <div
            key={index}
            className="border shadow-xl rounded-xl mx-auto h-[360px]"
          >
            <div className="w-[300px]">
              <img
                src={item.image}
                className="w-full rounded-l-md rounded-r-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-2xl  py-4">{item.item}</h2>
              <p className="text-orange-500 text-center ">
                {" "}
                Rs. {item.price}.00
              </p>
              <motion.button
                className="bg-white text-orange-300 font-semibold  border border-orange-400 rounded-md px-6 py-1  "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDispatch(item)}
              >
                ADD TO ITEM
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 px-6">
        <h2 className="sm:text-4xl text-2xl text-green-600 pb-4 md:text-center">
          Delicious Combo Sweets As A Token Of Gift
        </h2>
        <p>
          Our combo packs include a variety of sweet treats, ranging from luxury
          laddus to cashew biscuits to Rich Nuts Special Box & Cashew Roll
          boxes. Our combo packs are thoughtfully chosen so that each item
          enhances the others and provides a well-balanced & satisfying
          experience for your taste buds.
        </p>
      </div>
      <h2 className="sm:text-4xl text-2xl text-green-600 pb-12 pt-6 text-center">
        COMBO OFFERS!
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 ">
        {GiftCombo.map((item, index) => (
          <div
            key={index}
            className="border shadow-xl rounded-xl mx-auto h-[400px]"
          >
            <div className="w-[300px]">
              <img
                src={item.image}
                className="w-full rounded-l-md rounded-r-md h-60"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-2xl  py-4">{item.item}</h2>
              <p className="text-orange-500 text-center ">
                Rs. {item.price}.00
              </p>
              <motion.button
                className="bg-white text-orange-300 font-semibold  border border-orange-400 rounded-md px-6 py-1  "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDispatch(item)}
              >
                ADD TO ITEM
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      <div className="py-8 px-6">
        <h2 className="sm:text-4xl text-2xl text-green-600 py-4 ">
          Gift Delicious Sweet Boxes On Special Occasions
        </h2>
        <p>
          Since ancient times, sweets have played a significant role in human
          celebrations. Sweets have always been a sign of joy and abundance at
          social gatherings and religious festivals, as well as weddings and
          birthdays.
        </p>
        <p>
          Imagine the joy and excitement on your loved one's face when they
          receive a beautifully packaged sweet box filled with your favourite
          treats! With online delivery services, you can have the sweet box
          delivered straight to their doorstep, making it a convenient and
          hassle-free gifting option. Pick their favourite sweets & send sweet
          boxes for gifting and make them feel special.
        </p>
      </div>
      <div className="px-6">
        <h2 className="sm:text-4xl text-2xl text-green-600 py-4 ">
          Order Gift Boxes From Srigruhafoods
        </h2>
        <p className="text-[#302D2B]">
          If you are looking for a perfect gifting option, we have you covered.
          Shree Anandhaas Sweets & Snacks offers gift boxes & combo gift offers.
          Our gifting feature is user-friendly. Check out the steps below to
          place your order.
        </p>
        <p className="text-2xl font-semibold py-4">Steps to follow:</p>
        <ul className="list-disc	px-6 pb-4">
          <li className="py-2">Click on to Srigruhafoods Gifting page.</li>
          <li>Choose the gift and add it to your cart.</li>
          <li className="py-2">Fill in the required details.</li>
          <li>Proceed with the payment.</li>
        </ul>
      </div>
    </div>
  );
};

export default GiftingCard;
