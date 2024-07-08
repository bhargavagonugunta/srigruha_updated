import React from "react";
import { homeData, SnacksData, PicklesData } from "./homedata";
import { AddCart } from "../CartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch();
  function handleDispatch(item) {
    dispatch(AddCart(item));
  }

  return (
    <div className="pb-20">
      <h2 className="text-center text-4xl py-16 ">SWEET</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-10   gap-8 ">
        {homeData.map((item, index) => (
          <div
            key={index}
            className="w-[300px] shadow-xl bg-white rounded-lg mx-auto p-4"
          >
            <div>
              <img src={item.image} className="w-full h-[200px] rounded-lg" />
            </div>
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <motion.button
              className="bg-white text-orange-300 font-semibold  border border-orange-400 rounded-md px-6 py-1 mt-4  "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDispatch(item)}
            >
              ADD TO ITEM
            </motion.button>
          </div>
        ))}
      </div>
      <h2 className="text-4xl py-16 text-center  ">SNACKS</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-auto  gap-8 m-8">
        {SnacksData.map((item, index) => (
          <div
            key={index}
            className="w-[300px] shadow-xl bg-white rounded-lg mx-auto p-4"
          >
            <div>
              <img src={item.image} className="w-full h-[200px] rounded-lg" />
            </div>
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <motion.button
              className="bg-white text-orange-300 font-semibold  border border-orange-400 rounded-md px-6 py-1  mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDispatch(item)}
            >
              ADD TO ITEM
            </motion.button>
          </div>
        ))}
      </div>
      <h2 className="text-center text-4xl py-16 "> PICKLE </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 px-auto  gap-8 m-8">
        {PicklesData.map((item, index) => (
          <div
            key={index}
            className="w-[300px] shadow-xl bg-white rounded-lg mx-auto p-4"
          >
            <div>
              <img src={item.image} className="w-full h-[200px] rounded-lg" />
            </div>
            <h2 className="text-2xl py-4 pl-6 font-semibold">{item.item}</h2>
            <p className="p-4 overflow-hidden h-[90px]">{item.description}</p>
            <p className="font-bold px-3">
              <span className="px-2">RS.</span>
              {item.price}
            </p>
            <motion.button
              className="bg-white text-orange-300 font-semibold  border border-orange-400 rounded-md px-6 py-1  mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDispatch(item)}
            >
              ADD TO ITEM
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
