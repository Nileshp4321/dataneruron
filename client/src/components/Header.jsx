import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="text-3xl text-purple-800">Crane</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Stationary 123
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Wedding
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Business
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Holiday
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Events
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Sympathy
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
          >
            Sale
          </a>
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="purple"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="purple"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="purple"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <div className="hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-600  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="mt-2 space-y-2" id="disclosure-1 ">
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900 "
                  >
                    Stationary 123
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Wedding
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Business
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Holiday
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Sympathy
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    Sales
                  </a>
                </div>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
