import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="relative isolate px-6 flex justify-center w-4/5 items-center bg-yellow-400">
      <div className=" max-w-2xl py-20 w-screen flex justify-center items-center">

        <div className="text-center flex items-center justify-center mx-3 flex-wrap p-3">
          <div className="flex flex-wrap justify-center items-center"  >
            <h1 className="text-5xl flex flex-wrap m-12">Thank You</h1>
            <p className="flex flex-wrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptatum nemo nam aut optio vitae voluptate! Eos error eveniet
              corporis tempora sed! Nulla molestias dignissimos saepe sapiente
              veritatis? Perferendis, delectus.
            </p>
          </div>
          {/* <img src="" /> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection
