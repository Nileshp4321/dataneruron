import React from "react";
import Card from "./Card";

const CartAndFilter = () => { 
  return (
    <div className="w-full flex my-10 xs:flex-col lg:flex-row justify-center">
        
      <div className="xs:hidden relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center sm:flex-col md:flex-col lg:block xl:block lg:justify-center ">
        <div className="flex flex-col ">
          <div className=" w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">BRAND</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">DESIGN COLOR</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">DESIGN STYLE</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PAPER COLOR</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PAPER WEIGHT</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PERSONALIZED</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PHOTO CARD</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PRINT METHOD</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="w-72 flex flex-wrap justify-between">
            <h1 className="text-2xl">PRODUCT TYPE</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-2 rounded-md shadow-sm xs:block lg:hidden xl:hidden ">
      <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-purple-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="FILTERS"
          />
          <div className="flex flex-wrap">
          <label>Sort By</label>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-purple-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="POSITION"
          />
          </div>
      </div>
      <div className="my-10  xxl:hidden flex flex-wrap justify-center " role="dialog" aria-modal="true">
         <div className="flex h-10 sm:hidden xs:hidden md:hidden lg:flex lg:w-full lg:justify-center lg:items-center"> 
          <label>Sort By</label>
         <select className="border border-gray-950 rounded mx-3 px-5 py-1">
            <option>
              POSITION
            </option>
            <option>
              LOW-HIGH
            </option>
            <option>
              NAME
            </option>
            <option>
              COLOR 
            </option>
         </select>  
          </div>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>

  );
};

export default CartAndFilter;
