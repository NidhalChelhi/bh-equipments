"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import "../app/globals.css";
import TestimonialCard from "./TestimonialCard";
import { MoveLeft, MoveRight } from "lucide-react";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640);
    setIsMediumScreen(window.innerWidth > 640 && window.innerWidth < 1200);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-20  gap-16">
      <div className="w-full flex flex-row items-center justify-between px-12 md:px-32 ">
        <h1 className="text-5xl sm:text-7xl font-medium">Avis clients</h1>
        <div className="flex flex-row gap-5 items-center justify-center">
          <button
            className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-[#f8f9ff] flex items-center justify-center hover:scale-105 app_transition"
            onClick={goPrev}
          >
            <MoveLeft color="#aeaeb3" size={32} />
          </button>
          <button
            className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-primary flex items-center justify-center hover:scale-105 app_transition"
            onClick={goNext}
          >
            <MoveRight color="white" size={32} />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : "auto"}
        centeredSlides={false}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="swiper lg:ml-32"
      >
        <SwiperSlide>
          <TestimonialCard
            name="Amelia Joseph"
            position="Chief Manager"
            testimonial="My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations."
            imageUrl="avatar1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Jacob Joshua"
            position="Chief Manager"
            testimonial="I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!"
            imageUrl="avatar2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="John Doe"
            position="Chief Manager"
            testimonial="Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!"
            imageUrl="avatar3.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
