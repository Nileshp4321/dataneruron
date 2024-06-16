import React from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ProductPreview = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Overview",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the peop
      le who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Material",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Shiipping",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Details",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Location",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="w-full flex my-10 xs:flex-col md:flex-row lg:flex-row justify-evenly">
      <div className="xs:hidden sm:hidden md:flex lg:flex xl:flex xxl:flex relative isolate px-6 pt-14 lg:px-8 flex justify-center items-center md:flex-col  lg:justify-center ">
        <div className="relative flex flex-col text-gray-700 bg-white  bg-clip-border rounded-xl w-32 h-80 xs:hidden sm:hidden md:flex lg:flex xl:flex xxl:flex">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
        </div>
      </div>
      <section className="py-16 px-8">
        <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 md:flex ">
        <h3 className="hidden w-96 text-center xs:block sm:block md:hidden lg:hidden xl:hidden xxl:hidden m-2 antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-inherit mb-4">
              Premium Airbuds
            </h3>
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80    "
            alt="pink blazer"
            className="h-[36rem] "
          />
          
          <div className="relative text-gray-700 bg-white bg-clip-border rounded-xl w-32 md:hidden lg:hidden xl:hidden xxl:hidden xs:flex xs:flex-row xs:w-80">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-28">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="profile-picture"
            />
          </div>
        </div>
          <div className="m-5 flex flex-col md:flex-col">
            <h3 className="m-2 xs:hidden sm:hidden md:block lg:block xl:block xxl:block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-inherit mb-4">
              Premium Airbuds
            </h3>
            <h5 className="p-2 block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit">
              $1,490
            </h5>
            <p className="p-2 block antialiased font-sans text-base font-light leading-relaxed text-inherit !mt-4 text-base font-normal leading-[27px] !text-gray-500">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all we have. Then we lose
              family over time. What else could rust the heart more over time?
              Blackgold.
            </p>
            <div className="my-8  p-2 flex items-center gap-2">
              <div className="inline-flex items-center text-amber-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-inherit cursor-pointer text-blue-gray-500 w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit !text-sm font-bold !text-gray-700">
                4.0/5 (100 reviews)
              </p>
            </div>
            <h6 className="p-2 block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Color
            </h6>
            <div className="p-2 my-8 mt-3 flex items-center gap-2">
              <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600"></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100"></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900"></div>
            </div>
            <div className="mb-4 p-2 flex w-full items-center gap-3 md:w-1/2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 w-52"
                type="button"
                data-ripple-light="true"
              >
                Add to Cart
              </button>
              <button
                className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 shrink-0"
                type="button"
                data-ripple-dark="true"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent  border-b-2 border-gray-900 shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-gray-900 " : ""}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPreview;
