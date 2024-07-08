import React from "react";
import contact from "../contact/contact1.jpeg";
const Contact = () => {
  return (
    <div>
      <div
        className="relative h-[600px] "
        style={{
          background: `url(${contact})  center center / cover no-repeat`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="absolute inset-0 flex items-center justify-center md:text-4xl text-white text-2xl font-semibold">
          CONTACT US
        </h3>
      </div>

      <div className="flex flex-col justify-center ml-4 lg:items-center text-2xl lg:text-4xl gap-3 py-20  ">
        <h3>YOU’VE REACHED THE END.</h3>
        <h3>THERE’S ONLY GOING UP FROM HERE!</h3>
      </div>
      <p className="xl:text-center md:text-2xl sm:py-28 mx-4 ">
        Leave us a note on how much you loved us or what you think we should
        improve on, and we’ll get back to you as soon as possible.
      </p>

      <div className="md:ml-[150px] m-6">
        <h2 className="text-3xl py-4  ">WRITE TO US </h2>
        <form>
          <label htmlFor="fname">NAME</label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            id="fname"
            className="border border-slate-500 rounded-sm placeholder:text-slate-500 bg-transparent p-2 w-[250px] md:w-[400px] my-3"
          />
          <br />
          <label htmlFor="fname">LAST NAME</label>
          <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            id="fname"
            className="border border-slate-500 rounded-sm placeholder:text-slate-500 bg-transparent p-2 w-[250px] md:w-[400px] my-3"
          />
          <br />
          <label htmlFor="fname">MOBILE</label>
          <br />
          <input
            type="text"
            placeholder="Enter Mobile"
            id="fname"
            className="border border-slate-500 rounded-sm placeholder:text-slate-500 bg-transparent p-2 w-[250px] md:w-[400px] my-3"
          />
          <br />
          <label htmlFor="fname">EMAIL ID</label>
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            id="fname"
            className="border border-slate-500 rounded-sm placeholder:text-slate-500 bg-transparent p-2 w-[250px] md:w-[400px] my-3"
          />
          <br />
          <label htmlFor="query">Enquiry For</label>
          <br />
          <select
            name="query"
            id="query"
            className="border border-slate-500 rounded-sm placeholder:text-slate-500 bg-transparent p-2 w-[250px] md:w-[400px] my-3"
          >
            <option value="Select Query">Select query</option>
            <option value="volvo">About my order</option>
            <option value="volvo">My country not availble</option>
            <option value="volvo">Other</option>
          </select>
          <br />
          <label htmlFor="w3review">Message</label>
          <br />
          <textarea
            className=" w-[250px] md:w-[400px] border border-slate-500 placeholder:text-slate-500 bg-transparent p-2  my-3"
            id="w3review"
            name="w3review"
            rows="md:10"
            cols="md:50 30"
            placeholder="Enter Your message"
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit"
            className="px-12 py-2 my-12 rounded-sm md:text-2xl text-white bg-orange-400 hover:bg-orange-600 md:w-[400px]"
          />
        </form>
      </div>
      <h2 className="text-2xl pl-6 pb-4">REACH US</h2>
      <div className="flex text-2xl md:text-3xl justify-start items-center gap-6 pl-5">
        <p className="text-orange-500">
          <ion-icon name="location-outline"></ion-icon>
        </p>
        <p>CORPORATE OFFICE ADDRESS</p>
      </div>
      <address className="mx-[75px] md:text-2xl">
        Regd. Office:- Sri Gruha Foods Address: 5-38-45 1-2-23 Groud Floor Shop
        No-2, Jkc <br />
        College Street Svn Colony Guntur, Andhra Pradesh, 522002 India
      </address>
      <button className="font-semibold px-[80px] ml-[75px] py-2 text-white bg-orange-400 hover:bg-orange-600 rounded-sm my-12">
        GET DIRECTIONS
      </button>

      <div className="flex font-semibold justify-start items-center  gap-6 pl-5">
        <p className="text-orange-500 text-2xl">
          <ion-icon name="call-outline"></ion-icon>
        </p>
        <p>CONTACT NUMBER</p>
      </div>
      <p className="ml-[75px] py-4 pb-12">+919000059063</p>
      <div className="flex font-semibold justify-start items-center  gap-6 pl-5">
        <p className="text-orange-500 text-2xl">
          <ion-icon name="mail-outline"></ion-icon>
        </p>
        <p>EMAIL ADDRESS</p>
      </div>
      <p className="ml-[75px] py-4 pb-12">SRIGRUHAFOODS@GMAIL.COM</p>
      <div className="flex font-semibold justify-start items-center  gap-6 pl-5">
        <p className="text-orange-500 text-2xl">
          <ion-icon name="person-outline"></ion-icon>
        </p>
        <p>SUPPORT TIMING</p>
      </div>
      <p className="ml-[75px] py-4 pb-12">09:00 AM TO 7:00 PM</p>

      <h2 className="ml-[65px] font-semibold py-4">FOLLOW US</h2>
      <ul className="ml-[70px] flex gap-2">
        <li className="text-2xl text-orange-400 hover:text-orange-600  ">
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
        <li className="text-2xl text-orange-400 hover:text-orange-600">
          <ion-icon name="logo-instagram"></ion-icon>
        </li>
        <li className="text-2xl text-orange-400 hover:text-orange-600">
          <ion-icon name="logo-twitter"></ion-icon>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
