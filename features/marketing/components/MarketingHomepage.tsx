import Image from "next/image";
import React from "react";

const MarketingHomepage = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-800">
      {/* Background Image */}
      <div className="h-full sm:h-[calc(100vh-60px)] w-full px-10">
        <Image
          src="/background.jpeg"
          alt="Background"
          width={1100}
          height={1100}
          className="h-full w-full"
        />
      </div>

      {/* Content */}
      {/* <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simple. Secure. Reliable Messaging.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          With your app, communicate with friends and family for free, available
          on smartphones all over the world.
        </p>
        <div>
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium text-lg">
            Download Now
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default MarketingHomepage;
