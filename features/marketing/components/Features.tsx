import FeatureDescriptionWrapper from "@/components/FeatureDescriptionWrapper";
import React from "react";

const Features = () => {
  return (
    <>
      <FeatureDescriptionWrapper
        heading="Never miss a moment with voice and video calls"
        desc="From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls."
        href="/"
        img="/verbyflow1.jpeg"
        styles=""
      />
      <FeatureDescriptionWrapper
        heading="Keep in touch with your groups"
        desc="Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless."
        href="/"
        img="/verbyflow2.jpeg"
        styles="bg-vjl-black text-white"
        reverse
      />
      <FeatureDescriptionWrapper
        heading="Say what you feel"
        desc="Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story."
        href="/"
        img="/verbyflow3.jpeg"
        styles=""
      />
      <FeatureDescriptionWrapper
        heading="Transform your business"
        desc="Verbyflow helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with Verbyflow."
        href="/"
        img="/verbyflow4.jpeg"
        reverse
      />
    </>
  );
};

export default Features;
